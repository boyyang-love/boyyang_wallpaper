import type {Directive} from 'vue'

const lazyLoad: Directive = {
    created: (el, binding) => {
        const observe = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.intersectionRatio >= 0.9) {
                    console.log(entry.isIntersecting)
                    el.src = binding.value
                }
            })
        }, {
            root: null,
            threshold: 1,
        })

        observe.observe(el)
    },
}

export {
    lazyLoad,
}