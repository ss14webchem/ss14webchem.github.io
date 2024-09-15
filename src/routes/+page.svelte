
<script>
    import { get } from 'svelte/store';

    import 'agnostic-svelte/css/common.min.css';
    import { Header, Input,HeaderNav,HeaderNavItem} from 'agnostic-svelte';
    import Chem from '../components/chem.svelte';
    let filterPromise;

    let searchTerm = ''
    $: {
        console.log(searchTerm)
        filterPromise = getFiltered()
    }
    // JSON
    import chemicalsf from '../reactions/chemicals.json'
    import biological from '../reactions/biological.json'
    import botany from '../reactions/botany.json'
    import cleaning from '../reactions/cleaning.json'
    import fun from '../reactions/fun.json'
    import medicine from '../reactions/medicine.json'
    import pyrotechnic from '../reactions/pyrotechnic.json'
    import gas from '../reactions/gas.json'
    import food from '../reactions/food.json'
    
    let chemicals = chemicalsf.concat(fun).concat(medicine).concat(pyrotechnic).concat(gas).concat(biological).concat(cleaning).concat(botany)

    async function getFiltered() {
        if(searchTerm.length > 0) {
            let filter = await chemicals.filter(data => {
                return data.id.toLowerCase().includes(searchTerm.toLowerCase());
            });
            return filter
        } else {
            return chemicals
        }
    }

    filterPromise = getFiltered();




    //console.log(chemicals)




	
</script>

<div class="root">
    <div class="container">
        <Header isHeaderContentEnd="{true}">
            <a class="flex-fill" href="https://web.dev/">SS14WebChem</a>
            <HeaderNav>
                <HeaderNavItem>
                    <!---<div><code>bind:value</code> = {searchTerm}</div> -->
                    <Input bind:value={searchTerm}  uniqueId="2" isUnderlined isUnderlinedWithBackground isRounded placeholder="Search"/>
                </HeaderNavItem>
            </HeaderNav>
        </Header>
        <div class="container card-grid">

                {#await filterPromise}
                    Loading...
                {:then chemicalz}
                    {#each chemicalz as chemical}
                        <Chem title={chemical.id} reactants={chemical.reactants} products={chemical.products} minTemp={chemical.minTemp}/>
                    {/each}
                {:catch someError}
                    System error: {someError.message}
                {/await}
            </div>

    </div>
</div>

<style>
    .root {
        font-family: var(--agnostic-font-family-body);
        font-size: var(--agnostic-body);
        color: var(--agnostic-font-color);
        -webkit-font-smoothing: antialiased;
        line-height: 1.5;
    }


    .container {
        margin: 0 auto;
    }   

    .card-grid {
        margin: auto;
        gap: 1rem;
        padding-top: 2rem;
        padding-left: 5%;
        display: flex;
        flex-wrap: wrap;
   }
   

   
</style>