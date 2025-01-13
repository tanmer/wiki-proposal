import * as Turbo from "@hotwired/turbo"
import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import { Application } from "@hotwired/stimulus"
import MenuController from "./menu_controller"
import ViewImagesController from "./view_images_controller"
// import NavtreeController from "./navtree_controller"
// import ThemeController from "./theme_controller"
// import Dropdown from 'stimulus-dropdown'
import Daisyui from "daisyui"

//Search Modal, place this script before Alpine.start
Alpine.data('handleSearch', () => ({
    searchOpen: false,
    openSearch() {
        this.searchOpen = true;
        document.body.classList.add('overflow-hidden');
        Alpine.nextTick(() => {
            this.$refs.searchInput.focus();
        })
    },
    closeSearch() {
        this.searchOpen = false;
        document.body.classList.remove('overflow-hidden');
    },
}))
// Handle all dropdown auto close
// https://stackoverflow.com/questions/76786642/daisyui-click-outside-to-close-details-summary-dropdown
window.addEventListener('click', function(e) {
    document.querySelectorAll('.dropdown').forEach(function(dropdown) {
        if (!dropdown.contains(e.target)) {
            // Click was outside the dropdown, close it
            dropdown.open = false;
        }
    });
})

window.Alpine = Alpine
Alpine.plugin(collapse)
Alpine.start()

const application = Application.start()
window.Stimulus = application
application.register('menu', MenuController)
application.register('view_images', ViewImagesController)
// application.register('navtree', NavtreeController)
// application.register('theme', ThemeController)
// application.register('dropdown', Dropdown)
application.register('daisyui', Daisyui)
