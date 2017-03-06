<template>
  <div class="mainContainer">
    <div class="row">
      <div class="col-sm-4">
          <section class="filtersSection">
            <div class="filterDiv">
               <div class="form-group searchField">
                    <div class="searchTitle">Keywords</div>
                    <div class="input-group input-group-md searchField">
                        <div class="icon-addon addon-md">
                            <input type="text" placeholder="What are you looking for?" class="form-control">
                        </div>
                        <span class="input-group-btn">
                            <button class="btn btn-default" type="button">Search!</button>
                        </span>
                    </div>
                </div>
               <div class="Accordion">
                <accordion-item>
                    <div slot="title">Price Range</div>
                    <div slot="icon" class="accordionIcon"></div>
                    <div slot="content">
                        <p>Filters</p>
                    </div>
                </accordion-item>
                <accordion-item>
                    <div slot="title">Brand & Model</div>
                    <div slot="icon" class="accordionIcon"></div>
                    <div slot="content">
                        <p>Filters</p>
                    </div>
                </accordion-item>
                <accordion-item>
                    <div slot="title">Model Year</div>
                    <div slot="icon" class="accordionIcon"></div>
                    <div slot="content">
                        <p>Filters</p>
                    </div>
                </accordion-item>
                <accordion-item>
                    <div slot="title">Fuel Year</div>
                    <div slot="icon" class="accordionIcon"></div>
                    <div slot="content">
                        <p>Filters</p>
                    </div>
                </accordion-item>
                <accordion-item>
                    <div slot="title">KMs Driven</div>
                    <div slot="icon" class="accordionIcon"></div>
                    <div slot="content">
                        <p>Filters</p>
                    </div>
                </accordion-item>
                <accordion-item>
                    <div slot="title">Body Type</div>
                    <div slot="icon" class="accordionIcon"></div>
                    <div slot="content">
                        <p>Filters</p>
                    </div>
                </accordion-item>
                <accordion-item>
                    <div slot="title">Transmission</div>
                    <div slot="icon" class="accordionIcon"></div>
                    <div slot="content">
                        <p>Filters</p>
                    </div>
                </accordion-item>
                <accordion-item>
                    <div slot="title">Seller Type</div>
                    <div slot="icon" class="accordionIcon"></div>
                    <div slot="content">
                        <p>Filters</p>
                    </div>
                </accordion-item>
                <accordion-item>
                    <div slot="title">Color</div>
                    <div slot="icon" class="accordionIcon"></div>
                    <div slot="content">
                        <p>Filters</p>
                    </div>
                </accordion-item>
            </div>
            </div>
            <div class="vehicleReport">
                <span class="title">Get Vehicle Report</span><br/>
                <span class="text">Powered by Carjam</span>
            </div>
          </section>
      </div>
      <div class="col-sm-8">
        <swipe class="my-swipe">
            <swipe-item class="slide1">slide1</swipe-item>
            <swipe-item class="slide2">slide1</swipe-item>
            <swipe-item class="slide3">slide1</swipe-item>
          </swipe>
        <h2>This is Sample text</h2>
      </div>
    </div>
  </div>
</template>

<script>
import AccordionItem from './AccordionItem.vue'

export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to car trade App'
    }
  },
  components: {
    AccordionItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
