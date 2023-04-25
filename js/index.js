const APPS_URL = "/api/applications.json"

$$(function () {
  var vm = new Vue({
    el: "#app",
    data: {
      isTop: true,
      config: null,
      apps: null,
      menus: [
        {
          title: 'Gitee 主页',
          href: 'https://gitee.com/huajicloud',
          target: '_blank',
          type: 'menu'
        },
        {
          title: 'Github 主页',
          href: 'https://github.com/huajiqaq',
          target: '_blank',
          type: 'menu'
        },
      ],
      links: [
        {
          name: "AIDE Pro",
          href: "https://www.aidepro.top/"
        },
        {
          name: 'MDUI',
          href: 'https://www.mdui.org/'
        },
        {
          name: 'Vue',
          href: 'https://cn.vuejs.org/'
        },
        {
          name: 'Gitee',
          href: 'https://www.gitee.com/'
        },
        {
          name: 'GitHub',
          href: 'https://www.github.com/'
        }
      ]
    },
    created() {
      fetch(APPS_URL)
        .then(res => res.json())
        .then(json => this.apps = json)
        .catch(error => {
          console.error(error)
        })
    },
    mounted() {
      this.isTop = getTopState(window)
      window.addEventListener('scroll', () => this.isTop = getTopState(window))
      $$("#mainlist").mutation()
      $$("#linkslist").mutation()
    },
    updated() {
      $$("#mainlist").mutation()
      $$("#linkslist").mutation()
    }
  })
})
