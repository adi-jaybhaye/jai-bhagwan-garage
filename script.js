
document.addEventListener('DOMContentLoaded', () => {

  /* =====================
     Helpers
  ====================== */
  const qs = s => document.querySelector(s)
  const qsa = s => Array.from(document.querySelectorAll(s))

  /* =====================
     Footer year
  ====================== */
  const yearEl = qs('#year')
  if (yearEl) yearEl.textContent = new Date().getFullYear()

  /* =====================
     Mobile navigation
  ====================== */
  const navToggle = qs('.nav-toggle')
  const navLinks = qs('.nav-links')

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open')
    })
  }

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open')
    })
})


  /* =====================
     Smooth scroll
  ====================== */
  window.scrollToSection = id => {
    const el = qs(`#${id}`)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  /* =====================
     Call & WhatsApp
  ====================== */
  window.callNow = () => {
    window.location.href = 'tel:8554860281'
  }

  window.openWhatsApp = () => {
    const phone = '918554860281'
    const msg = encodeURIComponent(
      'Hi, I want to ask about bike service at Jai Bhagwan Auto Garage.'
    )
    window.open(`https://wa.me/${phone}?text=${msg}`, '_blank')
  }

  /* =====================
     Service filter (FIXED)
  ====================== */
  const chips = qsa('.chip')
  const services = qsa('.service-card')

  if (chips.length && services.length) {
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('active'))
        chip.classList.add('active')

        const filter = chip.dataset.filter
        services.forEach(card => {
          const type = card.dataset.type
          card.style.display =
            filter === 'all' || filter === type ? 'flex' : 'none'
        })
      })
    })
  }

  /* =====================
     Gallery (FIXED)
  ====================== */
  const galleryMainImg = qs('#galleryMain img')
  const galleryCaption = qs('#galleryCaption')
  const thumbs = qsa('.gallery-thumb')

  if (galleryMainImg && thumbs.length) {
    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        thumbs.forEach(t => t.classList.remove('active'))
        thumb.classList.add('active')

        galleryMainImg.src = thumb.dataset.image
        galleryMainImg.alt = thumb.dataset.caption
        if (galleryCaption) {
          galleryCaption.textContent = thumb.dataset.caption
        }
      })
    })
  }

  /* =====================
     FAQ toggle
  ====================== */
  qsa('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('open')
    })
  })

  /* =====================
     Timings toggle (FIXED)
  ====================== */
  const timingToggle = qs('#timingToggle')
  const timingList = qs('#timingList')

  if (timingToggle && timingList) {
    let detailed = false

    timingToggle.addEventListener('click', () => {
      detailed = !detailed

      timingList.innerHTML = detailed
        ? `
          <div class="timing-row"><span>Monday</span><span>9:00 AM – 9:00 PM</span></div>
          <div class="timing-row"><span>Tuesday</span><span>9:00 AM – 9:00 PM</span></div>
          <div class="timing-row"><span>Wednesday</span><span>9:00 AM – 9:00 PM</span></div>
          <div class="timing-row"><span>Thursday</span><span>9:00 AM – 9:00 PM</span></div>
          <div class="timing-row"><span>Friday</span><span>9:00 AM – 9:00 PM</span></div>
          <div class="timing-row"><span>Saturday</span><span>9:00 AM – 9:00 PM</span></div>
          <div class="timing-row"><span>Sunday</span><span>Half day (as per work)</span></div>
        `
        : `
          <div class="timing-row"><span>Mon – Sat</span><span>9:00 AM – 9:00 PM</span></div>
          <div class="timing-row"><span>Sunday</span><span>Half day (as per work)</span></div>
        `

      timingToggle.textContent = detailed ? 'View short' : 'View weekly'
    })
  }

  /* =====================
     Back to top button
  ====================== */
  const backToTop = qs('#backToTop')

  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 350)
    })

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  }

  /* =====================
     Fade-in animation
  ====================== */
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15 })

    qsa('.fade-in').forEach(el => observer.observe(el))
  }

})

