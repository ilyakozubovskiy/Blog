<template>
  <div>
    <div class="row">
       <div class="column">
        <h1 > about.</h1>
        <h2 >I am a Christian, the husband of a wonderful wife, a guitarist, a bicycle lover, and certainly a programmer.</h2>
       </div>
       <div class="column">
        <img :src="$withBase('/images/mountains-georgia.jpg')" class="featuredimage">
       </div>
    </div>
  
    <div class="features">
      <div class="feature">
        <h2 class="feature-header">.NET</h2><p> Here we will discuss C#/.NET, including .NET Framework 4.5 - 4.8, .NET Core and modern .NET (5-8). Also I want to make articles about popular programming books (CLR via C#, Pro C# 10 with .NET 6). Finally, you consider how to create an architecture using Design Patterns (GoF) and Microsoft patterns & practices.</p>
      </div>
      <div class="feature">
        <h2 class="feature-header">Dynamics 365</h2><p>Especially you can find information regarding Power Platform (Power Apps, Power Automate and Power Pages) and Dynamics 365 Customer Engagement Apps (Sales, Customer Service and Marketing).</p>
      </div>
      <div class="feature">
        <h2 class="feature-header">Azure</h2><p>You can find information related to the Cloud Computing via Azure. We will deep dive into popular Azure Solutions and Services like Azure Active Directory (now Entra ID), Azure Web Apps, Azure Functions, Azure Logic Apps, API Management etc.</p>
      </div>
    </div>

  <carousel :perPage = "1" >
  <slide >
    <img :src="$withBase('/images/microsoft-badges.jpg')">
  </slide>
</carousel>

<carousel :perPage = "1" :perPageCustom="[[768, 1], [1024, 2]]" >
  <slide >
    <img :src="$withBase('/images/scnsoftcert.jpg')" class="carousel-img" >
  </slide>
  <slide>
    <img :src="$withBase('/images/cppyellow.jpg')"  class="carousel-img">
  </slide>
  <slide>
    <img :src="$withBase('/images/cppwhite.jpg')" class="carousel-img" >
  </slide>
  <slide>
    <img :src="$withBase('/images/git.jpg')" class="carousel-img">
  </slide>
</carousel>
</div>
  
</template>

<style lang="stylus" scoped>
@import url('https://fonts.googleapis.com/css?family=Merriweather:400,400i,700&display=swap')
.blog-tags
  min-height:500px
.blog-tag
  border-radius:50px
  &:hover
    text-decoration:none
h1
  line-height:2.0
  font-weight: bold
  font-size:80px
</style>

<style>

.column {
  float: left;
  width: 50%;
  padding: 10px;
}

/* Clear floats after the columns */

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 800px) {
  .column {
    width: 100%;
  }
}

.featuredimage {
  --b: 8px;  /* border thickness*/
  --s: 60px; /* size of the corner*/
  --g: 14px; /* the gap*/
  --c: #03b988; 
  
  padding: calc(var(--b) + var(--g));
  background-image:
    conic-gradient(from  90deg at top    var(--b) left  var(--b),#0000 25%,var(--c) 0),
    conic-gradient(from -90deg at bottom var(--b) right var(--b),#0000 25%,var(--c) 0);
  background-position:
    var(--_p,0%) var(--_p,0%),
    calc(100% - var(--_p,0%)) calc(100% - var(--_p,0%));
  background-size: var(--s) var(--s);
  background-repeat: no-repeat;
  cursor: pointer;
  transition: 
    background-position .3s var(--_i,.3s), 
    background-size .3s calc(.3s - var(--_i,.3s));
}
.featuredimage.alt {
  background-image:
    conic-gradient(from 180deg at top    var(--b) right var(--b),#0000 25%,var(--c) 0),
    conic-gradient(from   0deg at bottom var(--b) left  var(--b),#0000 25%,var(--c) 0);
  background-position:
    calc(100% - var(--_p,0%)) var(--_p,0%),
    var(--_p,0%) calc(100% - var(--_p,0%));
}
.featuredimage:hover {
  background-size: calc(100% - var(--g)) calc(100% - var(--g));
  --_p: calc(var(--g)/2);
  --_i: 0s;
}

/* container */
.features {
  margin-top: 20px;
    display:block;
}

/* columns */
.features > * {
    padding:1rem;
}

/* tablet breakpoint */
@media (min-width:768px) {
    .features {
        display: grid;
        grid-auto-rows: 1fr;
        grid-template-columns: 1fr 1fr 1fr;
    }
}
.feature-header{
  font-weight: bolder;
}

.carousel-img{
  padding: 20px;
}
</style>