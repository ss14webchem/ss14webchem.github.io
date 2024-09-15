<script>
    export const prerender = true;

    export let title;
    export let reactants;
    export let products;
    export let minTemp;
    let product;
    let react = Object.entries(reactants);
    if (products) {
        product = Object.entries(products);
    }


    import { Card } from 'agnostic-svelte';
</script>

<div>
    <Card isBorder="{true}" isStacked="{true}">
        
        <b>
            <div class="p16 title">{ title }</div>
        </b>
        <div class="mix">
            {#if !minTemp} 
            <p class="mixtext">Mix</p>        
            {/if}
            {#if minTemp} 
            <p>Mix at {minTemp}K</p>        
            {/if}
        </div>
  
        <div class="split">
            <div class="p16 list">
                <b>
                    <div class="p16 tag">Reactants</div>
                </b>
                {#each react as reactant}
                    <div class="p16 item">
                        {reactant[0]} [{reactant[1].amount}]
                    </div>
                {/each}
            </div>
            {#if products}
                <div class="p16 list">
                    <b>
                        <div class="p16 item">Products</div>
                    </b>
                    {#each product as prod}
                        <div class="p16 item">
                            {prod[0]} [{prod[1]}]
                        </div>
                    {/each}
                </div> 
            {/if}

            </div>
        <div class="p16 hidden">🧑‍🚀🧑‍🚀🧑‍🚀🧑‍🚀🧑‍🚀🧑‍🚀🧑‍🚀🧑‍🚀🧑‍🚀🧑‍🚀🧑‍🚀🧑‍🚀</div>
    </Card>
</div>

<style>
    .item {
        display: flex;
        flex-direction: column;
    }

    .list {
        display: flex;
        flex-direction: column;
    }

    .mixtext{
        margin: auto;
    }

    .mix {
        display: inline-block;
        justify-content: center;

    }
        
    .split {
        display: inline-flex;
    }


    .title {
        font-size: 20px;
    }

    .tag {
        font-size: 18px;
    }

   .hidden {
        visibility: hidden;
   }
</style>