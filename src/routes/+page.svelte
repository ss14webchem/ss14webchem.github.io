
<script>
    export const prerender = true;


    import { get } from 'svelte/store';

    import 'agnostic-svelte/css/common.min.css';
    import { Header, Input,HeaderNav,HeaderNavItem, Button, ButtonGroup} from 'agnostic-svelte';
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
    
    let ogChemicals = chemicalsf.concat(fun).concat(medicine).concat(pyrotechnic).concat(gas).concat(biological).concat(cleaning).concat(botany)

    let chemicals = ogChemicals




    function getProductless() {
        let filter = chemicals.filter(data => {
                if(!data.products) {
                    return data
                }
            });
        return filter
    }

    function getProducts() {
        let filter = chemicals.filter(data => {
            if(data.products) {
                let obj = data.products
                let keys = Object.keys(obj)
                return keys.length > 0 
            }
        });

        let filter2 = filter.filter(data => {
            let id = data.id.toLowerCase();
            return !id.includes('breakdown');
        });

        return filter2
    }




    async function getFiltered() {
        if(searchTerm.length > 0) {
            let filter2 = await chemicals.filter(data => {
                let keys = Object.keys(data.reactants)
                let words = keys.map(function(v) {
                    return v.toLowerCase();
                });
                return words.includes(searchTerm.toLowerCase());
            });
            console.log(filter2)
            let filter = await chemicals.filter(data => {
                return data.id.toLowerCase().includes(searchTerm.toLowerCase());
            });

            return filter.concat(filter2)
        } else {
            return chemicals
        }
    }

    filterPromise = getFiltered();


    const onUseful = (e) => {
        chemicals = ogChemicals
        chemicals = getProducts()
        let storedTerm = searchTerm
        searchTerm = 'random'
        searchTerm = storedTerm
        console.log(chemicals)
    };

    const onAll = (e) => {
        chemicals = ogChemicals
        let storedTerm = searchTerm
        searchTerm = 'random'
        searchTerm = storedTerm
        console.log(chemicals)
    };

    const onLess = (e) => {
        chemicals = ogChemicals
        chemicals = getProductless();
        let storedTerm = searchTerm
        searchTerm = 'random'
        searchTerm = storedTerm
        console.log(chemicals)
    };

	
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

        <div class="container buttons">
            <ButtonGroup ariaLabel="Appropriate label for your button group">
                <Button isGrouped isBordered mode="primary" on:click={onAll}>All</Button>
                <Button isGrouped isBordered mode="primary" on:click={onUseful}>Useful</Button>
                <Button isGrouped isBordered mode="primary" on:click={onLess}>Productless</Button>
            </ButtonGroup>
        </div>
          
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

    :root {
        font-family: var(--agnostic-font-family-body);
        font-size: var(--agnostic-body);
        color: var(--agnostic-font-color);
        --agnostic-primary-modelight: #053337;
        -webkit-font-smoothing: antialiased;
        line-height: 1.5;
    }


    .container {
        margin: 0 auto;
    }   

    .buttons {
        padding-top: 2rem;
        padding-left: 5%;
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