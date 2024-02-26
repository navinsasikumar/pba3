<script>
  import TailwindCss from '../lib/TailwindCSS.svelte';

  export let birds, today; 

  const confirmed = ['PE', 'CN', 'DD', 'UN', 'ON', 'FL', 'CF', 'FY', 'FS', 'NE', 'NY'];
  const probable = ['S7', 'M', 'P', 'T', 'C', 'N', 'A', 'B'];
  const possible = ['H', 'S'];

  const breedingCodeDetails = {
    PE: {
      category: 'confirmed',
      description: 'Physiological evidence of breeding based on a bird in the hand. This code is used primarily by bird banders and includes evidence such as an incubation (brood) patch, cloacal protuberance, or an egg in the oviduct.',
      title: 'Physiological Evidence'
    },
    CN: {
      category: 'confirmed',
      description: 'Adult carrying nesting material to an unseen nest, such as sticks, grass, mud, and cobwebs. For raptors, be sure the material is not simply incidental to prey capture/transport. For wrens, use B.',
      title: 'Carrying Nesting Material',
    },
    DD: {
      category: 'confirmed',
      description: 'Distraction displays and injury feigning in attempt to draw intruder away from nest or young.',
      title: 'Distraction Display',
    },
    UN: {
      category: 'confirmed',
      description: 'Used nest found, but no adult birds seen nearby. Use only if the nest was used during the Atlas period and you are certain of the species. Add comments detailing how you identified the nest. Do not collect the nest, but do take a photograph if possible. Enter ‘0’ if no individuals of that species are observed during your visit.',
      title: 'Used Nest',
    },
    ON: {
      category: 'confirmed',
      description: 'Occupied nest indicated by adult sitting in nest in incubating position, adult entering nest site and remaining, or exchange of incubation duties by the pair. This code is useful for nests high in trees, on cliffs, and in chimneys where the contents of the nest and incubating or brooding adult cannot be seen.',
      title: 'Occupied Nest',
    },
    FL: {
      category: 'confirmed',
      description: 'Recently fledged or downy young still dependent upon adults and presumed incapable of extended flights from nest site. Look for retained downy feathers, a yellow gape, a short tail (shorter than the wings), clumsy flight and landings, and a bird incapable of feeding itself. Beware of family groups late in the breeding season which may still be interacting but are far from the breeding location. Young cowbirds begging for food confirm both the cowbird and the host species. If you find a dead fledgling and don’t see an adult of the same species, use a count of ‘0’ and enter the FL code.',
      title: 'Recently Fledged & Precocial Young',
    },
    CF: {
      category: 'confirmed',
      description: 'Adult carrying food for young or incubating partner. Use special caution with corvids, raptors, terns, and other species that regularly carry food for courtship, caching, or other purposes. One of the best signs to look for is the repeated carrying of food in the same direction.',
      title: 'Carrying Food',
    },
    FY: {
      category: 'confirmed',
      description: 'Adult feeding young that have left the nest. This code does not confirm breeding for species that may move many miles from the nest site, such as raptors and terns. Use the NY code for nestlings being fed by an adult.',
      title: 'Feeding Young',
    },
    FS: {
      category: 'confirmed',
      description: 'Adult carrying fecal sac or egg shell fragments. Many passerine adults keep their nests clean by carrying membranous, white fecal sacs and broken eggshells away from the nest. Note that only songbirds and woodpeckers produce fecal sacs and this code should only be applied to these groups of species.',
      title: 'Carrying Fecal Sac',
    },
    NE: {
      category: 'confirmed',
      description: 'Nest with eggs. Be careful not to disturb the vicinity of the nest. Confirm the species by waiting at a distance until adult returns. If no birds are seen, use the UN code. If a cowbird egg is found in the nest, use code NE for both the cowbird and the host species; if no individual cowbirds were seen that day, then enter a “0” in the Brown-headed Cowbird number field during data entry.',
      title: 'Nest with Eggs',
    },
    NY: {
      category: 'confirmed',
      description: 'Nest with young seen or heard. Keep your distance so nestlings are not prematurely flushed from the nest. Include the nestlings in your species count. Presence of cowbird young confirms both the cowbird and the host species.',
      title: 'Nest with Young',
    },
    S7: {
      category: 'probable',
      description: 'Singing bird present at same location on at least two occasions 7 or more days apart. Do not use if you observed the species singing a week earlier elsewhere in your block. This behavior presumes a permanent territory. Observations must be made within the same breeding season; observations from different years do not apply.',
      title: 'Singing Bird Present 7+ Days',
    },
    M: {
      category: 'probable',
      description: 'Multiple (7 or more) singing or territorial birds of a species detected within a block within a single breeding season. If you are submitting separate checklists for different locations and habitats in your block (recommended) and you don’t have all 7 birds on a single checklist, use this code on the checklist where you reach a total of 7 birds and make a note in the comment field that you are including birds from other checklists in the block.',
      title: 'Multiple (7+) Singing Birds',
    },
    P: {
      category: 'probable',
      description: 'Pair observed in suitable nesting habitat. Only use this code when you are fairly certain that a mated pair of birds has been observed. Look for behavioral cues to determine if you have a male-female pair, particularly in species where males and females look the same.',
      title: 'Pair in Suitable Habitat',
    },
    T: {
      category: 'probable',
      description: 'Permanent territory presumed through defense of breeding territory by fighting or chasing. While this is generally used for individuals of the same species, an interaction between members of different species may fall under this code when it appears to be territorial defense. Also see “A – Agitated Behavior.” Because territoriality involves the defense of a fixed area, it may be useful to map locations of individuals to determine if they are defending the same general area when surveying the block on future visits.',
      title: 'Territorial Defense',
    },
    C: {
      category: 'probable',
      description: 'Courtship behavior or copulation between a male and a female. Courtship behavior includes transfer of food, displays, and grooming between a pair of birds.',
      title: 'Courtship, Display or Copulation',
    },
    N: {
      category: 'probable',
      description: 'Repeated visits to a probable nest site. This is especially useful for cavity nesters or for a shrub-nesting species that flies into the same thicket and disappears on several occasions.',
      title: 'Visiting Probable Nest Site',
    },
    A: {
      category: 'probable',
      description: 'Agitated behavior or anxiety calls from adults indicating a nest site or young in the vicinity. This code refers to a stronger reaction to intruders than those exhibited by “T – Territorial Defense,” usually against brood parasites, nest predators, and humans. Do not use this code for agitation induced by “pishing” or playing recordings. This code also excludes mobbing behavior that species engage in year-round (e.g., mobbing an owl).',
      title: 'Agitated Behavior',
    },
    B: {
      category: 'probable',
      description: 'Nest-building by wrens or excavation of cavities by woodpeckers. Wrens may build “dummy” nests before the female selects a nest. Woodpeckers often drill holes for roosting.',
      title: 'Wren/Woodpecker Nest Building',
    },
    H: {
      category: 'possible',
      description: 'Adult in suitable nesting habitat during its breeding season. Important to note both the habitat component and the breeding season component (which can be very different for residents vs migrants).',
      title: 'In Appropriate Habitat',
    },
    S: {
      category: 'possible',
      description: 'This should be used when you encounter any bird singing. This code is also used for non-songbirds giving their primary vocalization, such as woodpecker drumming, owl calls, rail vocalizations, and woodcock peenting. If in doubt, refer to the Acceptable Codes Chart. If a bird is heard singing at the same place on a second trip during the breeding season, it may qualify as S7.',
      title: 'Singing Bird',
    },
  }

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

  let weeks = {
    Janw1: {}, Janw2: {}, Janw3: {}, Janw4: {},
    Febw1: {}, Febw2: {}, Febw3: {}, Febw4: {},
    Marw1: {}, Marw2: {}, Marw3: {}, Marw4: {},
    Aprw1: {}, Aprw2: {}, Aprw3: {}, Aprw4: {},
    Mayw1: {}, Mayw2: {}, Mayw3: {}, Mayw4: {},
    Junw1: {}, Junw2: {}, Junw3: {}, Junw4: {},
    Julw1: {}, Julw2: {}, Julw3: {}, Julw4: {},
    Augw1: {}, Augw2: {}, Augw3: {}, Augw4: {},
    Sepw1: {}, Sepw2: {}, Sepw3: {}, Sepw4: {},
    Octw1: {}, Octw2: {}, Octw3: {}, Octw4: {},
    Novw1: {}, Novw2: {}, Novw3: {}, Novw4: {},
    Decw1: {}, Decw2: {}, Decw3: {}, Decw4: {},
  };

  weeks.Febw3 = {
    'Rock Pigeon': [...confirmed, ...probable, ...possible],
    'Bald Eagle': [...confirmed, ...probable],
    'Great Horned Owl': [...confirmed, ...probable, ...possible],
    'Barred Owl': [...confirmed, ...probable, ...possible],
    'Red-tailed Hawk': [...confirmed, ...probable],
    'Common Raven': [...confirmed, ...probable],
    'House Sparrow': [...confirmed, ...probable, ...possible],
  }; 

  weeks.Febw4 = {
    'Rock Pigeon': [...confirmed, ...probable, ...possible],
    'Bald Eagle': [...confirmed, ...probable],
    'Red-tailed Hawk': [...confirmed, ...probable],
    'Great Horned Owl': [...confirmed, ...probable, ...possible],
    'Barred Owl': [...confirmed, ...probable, ...possible],
    'Common Raven': [...confirmed, ...probable],
    'Carolina Chickadee': [...confirmed, ...probable],
    'House Sparrow': [...confirmed, ...probable, ...possible],
  }; 

  weeks.Mar1 = {
    'Wild Turkey': [...confirmed, ...probable],
    'Rock Pigeon': [...confirmed, ...probable, ...possible],
    'Bald Eagle': [...confirmed, ...probable],
    'Red-tailed Hawk': [...confirmed, ...probable],
    'Eastern Screech-Owl': [...confirmed, ...probable],
    'Great Horned Owl': [...confirmed, ...probable, ...possible],
    'Barred Owl': [...confirmed, ...probable, ...possible],
    'American Kestrel': [...confirmed, ...probable],
    'Common Raven': [...confirmed, ...probable, ...possible],
    'Carolina Chickadee': [...confirmed, ...probable],
    'House Sparrow': [...confirmed, ...probable, ...possible],
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
  const currentWeek = getCurrentWeek(today);

  birds = weeks[currentWeek];

</script>

<TailwindCss/>

<!---Modal -->
{#if modalVisible}
  <div on:click={() => closeModal()} class="absolute insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="modal">
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
    {today.toLocaleString("default", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
  </span>
</p>
<p class="px-4 py-2 text-xs">See <a href="#code-explanation" class="cursor-pointer text-red-400 underline">bottom</a> or click on the code to get an explanation of the breeding codes</p>
<div class="container max-w-full px-4 text-sm w-full">
  {#each Object.entries(birds) as [bird, codes]}
    <div class="bird-block pb-2 text-wrap">
      <div class="bird-name font-medium">{bird}</div>
      <div class="breeding-codes break-words">
        {#each codes as code, index}
          <span on:click={() => describeCode(code)} class="cursor-pointer hover:text-red-400 hover:underline decoration-dotted">{code}</span>{#if index < codes.length - 1},&nbsp;{/if}
        {/each}
      </div>
    </div>
  {/each}
</div>

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

<svelte:window on:keydown|preventDefault={onKeyDown} />
