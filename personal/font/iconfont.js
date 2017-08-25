;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-dianhua" viewBox="0 0 1000 1000">' +
    '' +
    '<path d="M515.1568 46.6414c-241.3782 0-437.0546 195.6673-437.0546 437.0367 0 241.3684 195.6764 437.0367 437.0546 437.0367s437.0546-195.6683 437.0546-437.0367C952.2114 242.3087 756.5351 46.6414 515.1568 46.6414zM515.1568 856.2585c-205.7789 0-372.5957-166.8099-372.5957-372.5804s166.8167-372.5804 372.5957-372.5804 372.5957 166.8099 372.5957 372.5804S720.9358 856.2585 515.1568 856.2585zM651.9377 711.1878l21.7701-11.9939c-17.218-21.0028-32.955-42.6141-47.5177-64.7191-14.4478-21.9231-27.7743-44.4369-40.2514-67.3663l-31.9387 17.5901c-42.1422-59.3717-78.1112-123.2444-106.6251-192.5075l32.3564-17.8239c-12.493-22.4618-24.1966-45.3972-34.8448-68.9532-11.065-24.4874-21.0626-49.7313-29.7101-75.9275l-21.4893 11.835c-36.4828 20.8339-52.0349 46.9472-46.6693 78.3549l0.3178 1.3301-0.1549 0.0909c1.7319 7.6228 3.5737 15.1857 5.5175 22.7026l0.0789 0.3328 0.008 0.015c33.9564 130.9282 100.2212 244.0615 189.5862 344.4675 0.2908 0.7545 0.5606 1.497 0.8045 2.2245 5.8653 5.9789 11.7345 11.9619 17.5988 17.9358C584.4487 730.092 614.8393 730.8945 651.9377 711.1878L651.9377 711.1878zM692.1521 689.0298c-17.7387-21.3945-33.8544-43.4146-48.681-65.9213-14.2669-21.6593-27.3176-43.6644-39.4619-65.9593l24.5384-13.5148c12.4701 3.1249 71.5874 71.9182 86.7248 132.6601L692.1521 689.0298 692.1521 689.0298zM497.8069 364.4069c-12.1273-21.8322-23.566-44.285-34.0783-67.5322-11.2688-24.9251-21.4024-50.7056-30.0958-77.5524l20.7518-11.4342c28.6697 22.7476 68.7682 122.8437 64.5599 144.8728L497.8069 364.4069z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-caidan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M872 136.992q28 0 47.488 19.488t19.488 47.488l0 51.008q0 28-19.488 47.488t-47.488 19.488l-742.016 0q-28 0-47.488-19.488t-19.488-47.488l0-51.008q0-28 19.488-47.488t47.488-19.488l742.016 0zM872 450.016q28 0 47.488 19.488t19.488 47.488l0 51.008q0 28-19.488 47.488t-47.488 19.488l-742.016 0q-28 0-47.488-19.488t-19.488-47.488l0-51.008q0-28 19.488-47.488t47.488-19.488l742.016 0zM872 763.008q28 0 47.488 19.488t19.488 47.488l0 51.008q0 28-19.488 47.488t-47.488 19.488l-742.016 0q-28 0-47.488-19.488t-19.488-47.488l0-51.008q0-28 19.488-47.488t47.488-19.488l742.016 0z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-youxiang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M515.347235 959.790606c-246.441808 0-447.775256-201.803145-447.775256-448.813912 0-247.016907 201.333448-448.820052 447.775256-448.820052 247.537769 0 447.772186 201.803145 447.772186 448.820052C963.119421 757.987461 761.783926 959.790606 515.347235 959.790606zM515.347235 106.266255c-222.23857 0-403.77002 180.851974-403.77002 404.709415 0 223.854371 181.53145 404.704298 403.77002 404.704298 223.331461 0 403.764903-181.953052 403.764903-404.704298C919.112138 288.220331 737.580688 106.266255 515.347235 106.266255zM771.107269 720.423937 272.807293 720.423937c-27.599591 0-50.061163-23.131837-50.061163-51.700499L222.74613 353.271906c0-28.553313 22.461571-51.742455 50.061163-51.742455l498.299977 0c27.713178 0 50.061163 23.189142 50.061163 51.742455L821.168432 668.723438C821.168432 697.2921 798.820448 720.423937 771.107269 720.423937zM757.89127 683.376159l-155.777903-142.819776-25.51921 23.131837c-14.886035 13.374612-33.038464 20.247136-54.636365 20.247136-21.48329 0-39.750329-6.872524-54.582129-20.247136l-25.520233-23.131837L286.082644 683.376159 757.89127 683.376159zM259.983219 372.184651l0 285.019429 155.191548-144.485719L259.983219 372.184651zM284.787138 338.577229l198.711737 181.904956c17.34504 15.971763 30.187533 23.904433 38.457894 23.904433s21.112853-7.931646 38.457894-23.904433l198.711737-181.904956L284.787138 338.577229zM783.948739 372.184651 628.757191 512.718361 783.948739 657.20408 783.948739 372.184651z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)