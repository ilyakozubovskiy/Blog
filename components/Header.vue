<template>
  <section id="header-wrapper">
    <header id="header">
      <div class="header-wrapper">
        <nav class="navbar navbar-expand-md navbar-light bg-white fixed-top">
          <div class="container">
            <NavLink link="/" class="navbar-brand"
              > {{ $site.title }}
            </NavLink>
            <div id="navbarsExampleDefault" class="collapse navbar-collapse">
              <ul v-if="$themeConfig.nav" class="navbar-nav ml-auto">
                <li
                  v-for="item in $themeConfig.nav"
                  :key="item.text"
                  class="nav-item"
                >
                  <NavLink :link="item.link" class="nav-link">{{
                    item.text
                  }}</NavLink>
                </li>
                <SearchBox />
                <Feed />
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  </section>
</template>

<script>
import SearchBox from '@SearchBox'
import Feed from './Feed'

export default {
  components: { SearchBox, Feed },
}
</script>

<style>
.router-link-active{
  color: #03a87c !important;
}
.nav-link{
  font-size: 18px !important;
}
.navbar-brand{
 color: black !important
}
</style>

<style lang="stylus">
@import '~@app/style/config'
// border-bottom 5px solid lighten(#3eaf7c, 50%)
color red
.header-wrapper
  .title
    /* flex 0 0 200px */
    font-size 30px
    margin 0
    letter-spacing 2px
    display block
    text-transform uppercase

    a
      color $darkTextColor
      font-weight bold
      text-decoration none

  .header-right-wrap
    flex 1
    display flex
    justify-content flex-end
    align-items center

    .nav
      flex 0 0 auto
      display flex
      margin 0

      .nav-item
        margin-left 20px

        a
          text-decoration none
          transition color 0.3s
    

    .search-box
      margin-left 20px

      input
        border-radius 5px
        transition all 0.5s
        border 1px solid #cecece

        &:hover
          border 1px solid $accentColor
          box-shadow 0 0 5px $accentColor

      .suggestions
        border 1px solid $darkBorderColor
        top 40px
        right 0

        a
          color $darkTextColor
          text-decoration none

          &.focused
            color $accentColor

             

@media (max-width: $MQMobile)
  #header
    display none

  .header-wrapper
    flex-direction column

    .header-right-wrap
      display none
</style>
