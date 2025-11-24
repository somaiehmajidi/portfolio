import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .then(() => {
    const preloader = document.getElementById('preloader')
    if (preloader) {
      setTimeout(function() { preloader.classList.add('preloaded') }, 800)
		  setTimeout(function() { preloader.remove() }, 2000)
    }

    document.addEventListener('mousemove', (e) => {
      const cursor = document.getElementById('custom-cursor')
      if (cursor) {
        cursor.style.top = `${e.clientY}px`
        cursor.style.left = `${e.clientX}px`
      }
    })
  })
  .catch((err) => console.error(err))
