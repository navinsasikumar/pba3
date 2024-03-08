<script>
  import TailwindCss from '../lib/TailwindCSS.svelte';
  import {region, view, sortOrder} from '$lib/store.js';
  import {
    breedingCodeDetails,
    confirmed,
    probable,
    possible,
  } from '$lib/breedingCodes.js';
  import {
    phillyBreeders,
    weeks,
  } from '$lib/breedingBirds.js';

  export let birds, today;

  let searchBird = '';

  let modalVisible = false;
  let codeVisibility = {
    PE: false,
    CN: false,
  }

  const describeCode = function(code) {
    modalVisible = true;
    codeVisibility[code] = true;
  };

  const closeModal = function() {
    modalVisible = false;
    Object.keys(codeVisibility).forEach(code => codeVisibility[code] = false);
  };

  const onKeyDown = function(e) {
		switch(e.keyCode) {
		  case 27:
			  closeModal();
				break;
		 }
	};

  const getCurrentWeek = function (today) {
    const month = today.toLocaleString("default", { month: "short" });
    const day = today.toLocaleString("default", { day: "numeric" });

    let week = '';
    if (day < 8) {
      week = 'w1';
    } else if (day < 15) {
      week = 'w2';
    } else if (day < 22) {
      week = 'w3';
    } else {
      week = 'w4';
    }

    const currentWeek = `${month}${week}`;
    return currentWeek;
  };

  today = new Date();

  const getBirds = function(dateString) {
    const currentWeek = getCurrentWeek(new Date(`${dateString}T06:00:00.000-05:00`));
    const birdsWeek = {...weeks[currentWeek]};
    let filteredBirds, birds;
    if ($region === 'philly') {
      const filteredEntries = Object.entries(birdsWeek).filter(([key, value]) => phillyBreeders.includes(key));
      filteredBirds = Object.fromEntries(filteredEntries);
    } else {
      filteredBirds = birdsWeek;
    }

    if ($sortOrder === 'alphabetical') {
      birds = Object.keys(filteredBirds).sort().reduce((obj, key) => {
        obj[key] = filteredBirds[key];
        return obj;
      }, {});
    } else {
      birds = {...filteredBirds};
    }

    const possibleBirds = Object.keys(birds).filter(bird => birds[bird].includes('H'));
    const probableBirds = Object.keys(birds).filter(bird => birds[bird].includes('S7') && !possibleBirds.includes(bird));
    const confirmedBirds = Object.keys(birds).filter(bird => birds[bird].includes('CN') && !possibleBirds.includes(bird) && !probableBirds.includes(bird));
    const confirmedandProbableBirds = [...confirmedBirds, ...probableBirds];

    return [birds, possibleBirds, probableBirds, confirmedBirds, confirmedandProbableBirds];
  };

  let possibleBirds, probableBirds, confirmedBirds, confirmedandProbableBirds;
  let dateString = today.toISOString().substring(0, 10);

  $: $region, $sortOrder, [birds, possibleBirds, probableBirds, confirmedBirds, confirmedandProbableBirds] = getBirds(dateString);

</script>

<TailwindCss/>

<!---Modal -->
{#if modalVisible}
  <div on:click={() => closeModal()} class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="modal">
    <div on:click|stopPropagation class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
      {#each Object.entries(breedingCodeDetails) as [code, details]}
        {#if codeVisibility[code]}
          <div>
            <div class="modal-header">
              {code} – {details.title} ({details.category})
            </div>
            <hr class="my-3">
            <div class="modal-body text-sm">
              {details.description}
            </div>
          </div>
        {/if}
      {/each}
      <hr class="my-3">
      <div class="modal-footer">
        <button on:click={() => closeModal()} class="bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">
          Close
        </button>
      </div>
    </div>
  </div>
{/if}

<div class="bg-slate-700 container max-w-full px-4 py-8 text-slate-100 w-full">
  <h1>Breeding Codes for PBA3</h1>
</div>
<p class="px-4 py-2">
  Safe breeding codes to use on
  <span class="text-red-400">
    <!-- {today.toLocaleString("default", { weekday: "long", year: "numeric", month: "long", day: "numeric" })} -->
    <input type="date" min="2024-01-01" max="2028-12-31" bind:value={dateString} />
  </span>
</p>

<div class="container max-w-full px-4 text-sm w-full" >
  <div class="columns-1 md:columns-2">
    <div class="columns-2">
      <fieldset class="border border-solid border-gray-300 p-2 rounded-md">
        <legend class="px-2">View</legend>

        <div class="inline-block pr-2 py-1">
          <input id="birds-view" type="radio" bind:group={$view} value="birds" />
          <label for="birds-view">Birds</label>
        </div>
        <div class="inline-block pr-2 py-1">
          <input id="codes-view" type="radio" bind:group={$view} value="codes" />
          <label for="codes-view">Codes</label>
        </div>
      </fieldset>

      <fieldset class="border border-solid border-gray-300 p-2 rounded-md">
        <legend class="px-2">Region</legend>

        <div class="inline-block pr-2 py-1">
          <input id="philly-region" type="radio" bind:group={$region} value="philly" />
          <label for="philly-region">Philly</label>
        </div>
        <div class="inline-block pr-2 py-1">
          <input id="pa-region" type="radio" bind:group={$region} value="pa" />
          <label for="pa-region">PA</label>
        </div>
      </fieldset>
    </div>

    <div class="columns-2">
      <fieldset class="border border-solid border-gray-300 p-2 rounded-md">
        <legend class="px-2">Sort</legend>

        <div class="inline-block pr-2 py-1">
          <input id="taxonomic-sort" type="radio" bind:group={$sortOrder} value="taxonomic" />
          <label for="taxonomic-sort">Taxonomic</label>
        </div>
        <div class="inline-block pr-2 py-1">
          <input id="alphabetical-srt" type="radio" bind:group={$sortOrder} value="alphabetical" />
          <label for=alphabetical-sort>Alphabetical</label>
        </div>
      </fieldset>

      <fieldset class="border border-solid border-gray-300 p-2 rounded-md">
        <legend class="px-2">Search</legend>
        <input type="text" bind:value={searchBird} class="px-2 py-1 rounded w-full" placeholder="Search for a bird" />
      </fieldset>
    </div>
  </div>
</div>

{#if Object.keys(birds).filter(bird => bird.toLowerCase().includes(searchBird.toLowerCase())).length <= 0}
  <div class="container max-w-full px-4 text-sm w-full" id="bird-first-view">
    <p class="py-2">No birds found matching your filters</p>
  </div>
{:else}
  {#if $view === 'birds'}
    <p class="px-4 py-2 text-xs">See <a href="#code-explanation" class="cursor-pointer text-red-400 underline">bottom</a> or click on the code to get an explanation of the breeding codes</p>
    <div class="container max-w-full px-4 text-sm w-full" id="bird-first-view">
      {#each Object.entries(birds) as [bird, codes]}
        {#if bird.toLowerCase().includes(searchBird.toLowerCase())}
          <div class="bird-block pb-2 text-wrap">
            <div class="bird-name font-medium">{bird}</div>
            <div class="breeding-codes">
              {#each codes as code, index}
                {#if confirmed.includes(code)}
                  <div on:click={() => describeCode(code)} class="align-middle bg-indigo-950 cursor-pointer h-10 inline-block mb-2 mr-2 p-3 rounded-full text-center text-xs text-white w-10 hover:bg-indigo-800">
                    {code}
                  </div>
                {:else if probable.includes(code)}
                  <div on:click={() => describeCode(code)} class="align-middle bg-purple-800 cursor-pointer h-10 inline-block mb-2 mr-2 p-3 rounded-full text-center text-xs text-white w-10 hover:bg-purple-600">
                    {code}
                  </div>
                {:else}
                  <div on:click={() => describeCode(code)} class="align-middle bg-purple-400 cursor-pointer h-10 inline-block mb-2 mr-2 p-3 rounded-full text-center text-xs text-white w-10 hover:bg-purple-300">
                    {code}
                  </div>
                {/if}
              {/each}
            </div>
          </div>
        {/if}
      {/each}

      <hr class="my-3">
      <div>
        <p class="py-2 text-sm">
          Legend
        </p>
        <div class="inline-block mr-2 pb-2 text-wrap text-xs">
          <div class="align-middle bg-indigo-950 h-5 inline-block mb-2 mr-2 p-3 rounded-full text-center text-xs text-white w-5"></div>Confirmed
        </div>
        <div class="inline-block mr-2 pb-2 text-wrap text-xs">
          <div class="align-middle bg-purple-800 h-5 inline-block mb-2 mr-2 p-3 rounded-full text-center text-xs text-white w-5"></div>Probable
        </div>
        <div class="inline-block mr-2 pb-2 text-wrap text-xs">
          <div class="align-middle bg-purple-400 h-5 inline-block mb-2 mr-2 p-3 rounded-full text-center text-xs text-white w-5"></div>Possible
        </div>
      </div>
    </div>
  {/if}

  {#if $view === 'codes'}
    <div class="container max-w-full px-4 py-2 text-sm w-full" id="code-first-view">
      {#if possibleBirds.length > 0 && possibleBirds.filter(bird => bird.toLowerCase().includes(searchBird.toLowerCase()))}
        <div class="code-block pb-2 text-wrap">
          <div class="bird-name font-medium">Any Breeding Code</div>
          <div class="bird-list columns-1 md:columns-4">
            {#each possibleBirds as bird, index}
              {#if bird.toLowerCase().includes(searchBird.toLowerCase())}
                <div class="w-full">{bird}</div>
              {/if}
            {/each}
          </div>
        </div>
      {/if}

      {#if confirmedandProbableBirds.length > 0 && confirmedandProbableBirds.filter(bird => bird.toLowerCase().includes(searchBird.toLowerCase()))}
        <div class="code-block pb-2 text-wrap">
          <div class="bird-name font-medium">Confirmed or Probable Breeding Code</div>
          <div class="bird-list columns-1 md:columns-4">
            {#each confirmedandProbableBirds as bird, index}
              {#if bird.toLowerCase().includes(searchBird.toLowerCase())}
                <div class="w-full">{bird}</div>
              {/if}
            {/each}
          </div>
        </div>
      {/if}

      <hr class="my-3">
      <div>
        <p class="py-2 text-base">
          List of Breeding Codes
        </p>
        <div class="pb-2 text-wrap">
          <div class="font-medium">Confirmed</div>
          <div class="mt-1">
            {#each confirmed as code}
              <div on:click={() => describeCode(code)} class="align-middle bg-indigo-950 cursor-pointer h-11 inline-block mb-2 mr-2 p-3 rounded-full text-center text-white w-11 hover:bg-indigo-800">
                {code}
              </div>
            {/each}
          </div>
        </div>
        <div class="pb-2 text-wrap">
          <div class="font-medium">Probable</div>
          <div class="mt-1">
            {#each probable as code}
              <div on:click={() => describeCode(code)} class="align-middle bg-purple-800 cursor-pointer h-11 inline-block mb-2 mr-2 p-3 rounded-full text-center text-white w-11 hover:bg-purple-600">
                {code}
              </div>
            {/each}
          </div>
        </div>
        <div class="pb-2 text-wrap">
          <div class="font-medium">Possible</div>
          <div class="mt-1">
            {#each possible as code}
              <div on:click={() => describeCode(code)} class="align-middle bg-purple-400 cursor-pointer h-11 inline-block mb-2 mr-2 p-3 rounded-full text-center text-slate-800 w-11 hover:bg-purple-300">
                {code}
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  {/if}

{/if}

<hr class="mx-4 my-3">

<a name="code-explanation"></a>
<p class="px-4 py-2">
  Explanation of Breeding Codes
</p>
<p class="px-4 py-2 text-xs">The following explanations are from the <a href="https://ebird.org/atlasny/about/breeding-codes" class="cursor-pointer text-red-400 underline">New York Bird Atlas</a></p>
<div class="px-4 text-sm">
  {#each Object.entries(breedingCodeDetails) as [code, details]}
    <div class="pb-2">
      <div class="font-medium">
       {code} - {details.title} ({details.category})
      </div>
      <div>{details.description}</div>
    </div>
  {/each}
</div>

<svelte:window on:keydown={onKeyDown} />
