<script>
  export let birds, today; 

  const confirmed = ['PE', 'CN', 'DD', 'UN', 'ON', 'FL', 'CF', 'FY', 'FS', 'NE', 'NY'];
  const probable = ['S7', 'M', 'P', 'T', 'C', 'N', 'A', 'B'];
  const possible = ['H', 'S'];

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
    'Great Horned Owl': [...confirmed, ...probable, ...possible],
    'Barred Owl': [...confirmed, ...probable, ...possible],
    'Bald Eagle': [...confirmed, ...probable],
    'Red-tailed Hawk': [...confirmed, ...probable],
    'Common Raven': [...confirmed, ...probable],
    'House Sparrow': [...confirmed, ...probable, ...possible],
  }; 

  weeks.Febw4 = {
    'Rock Pigeon': [...confirmed, ...probable, ...possible],
    'Great Horned Owl': [...confirmed, ...probable, ...possible],
    'Barred Owl': [...confirmed, ...probable, ...possible],
    'Bald Eagle': [...confirmed, ...probable],
    'Red-tailed Hawk': [...confirmed, ...probable],
    'Common Raven': [...confirmed, ...probable],
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

<h1>Breeding Codes for PBA3</h1>
<p>Safe breeding codes to use on {today.toLocaleString("default", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
<div>
  {#each Object.entries(birds) as [bird, codes]}
    <div class="bird-block">
      <div class="bird-name">{bird}</div>
      <div class="breeding-codes">{codes.join(", ")}</div>
    </div>
  {/each}
</div>
