<script lang="ts">
    import * as Command from "$lib/components/ui/command";
    import { type GeoCodingAPIResponse} from "../../../../types/geo-coding";
    import lodash from "lodash";
    const {debounce} = lodash;
    let { value, placeholder, selectedValue, searchValue }: {
        value: string;
        placeholder: string;
        searchValue: string;
        selectedValue?: GeoCodingAPIResponse;
    } = $props();
    const handleSelect = (val: GeoCodingAPIResponse) =>{
        selectedValue = val;
    }

    let data: GeoCodingAPIResponse[] = [];

    const handleDebounce = debounce((e) => {searchValue = e.target.value}, 1000)
    $effect(()=> console.log(searchValue))
</script>

<Command.Root>
    <Command.Input {placeholder} bind:value={value} oninput={handleDebounce}  />
    <Command.List>
      {#if searchValue.length > 0 }<Command.Empty>No results found.</Command.Empty>{/if}
      {#if  data && data.length > 0}
      <Command.Group>
        {#each data as item: GeoCodingAPIResponse}
            <Command.Item onclick={() => handleSelect(item)}>{item.name}</Command.Item> 
        {/each}
      </Command.Group>
      {/if}
    </Command.List>
  </Command.Root>