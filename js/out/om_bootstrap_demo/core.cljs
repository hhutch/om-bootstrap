(ns om-bootstrap-demo.core
  (:require-macros [dommy.macros :refer [node sel sel1]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [om-bootstrap.dom :as omd]
            [secretary.core :as secretary :include-macros true :refer [defroute]]
            [dommy.utils :as utils]
            [dommy.core :as dommy]
            ;; [goog.events :as events]
            ;; [goog.history.EventType :as EventType]
            [garden.core :refer [css]])
 ;; (:import goog.History
 ;;          goog.events)
)


(enable-console-print!)
(secretary/set-config! :prefix "#")

(def app-state (atom {}))

(defn garden-style [app owner]
  (reify
    om/IRender
    (render [_]
      (dom/style
       nil
       (css
        [:.centering {:float "none"
                      :margin "0 auto"
                      :border "none"}
         :.bs-docs-masthead :.bs-docs-header {:background "#2d2d2d"
                                              :filter "none"
                                              :color "#e9e9e9"}
         ])))))

(defn nav-main [app owner]
  (reify
    om/IRender
    (render [this]
      (omd/navbar #js {:componentClass dom/header
                       :brand (dom/a #js {:href "/" :className "navbar-brand"} "OM Bootstrap")
                       :staticTop true
                       :className "bs-docs-nav"
                       :role "banner"
                       :toggleNavKey 0}
                  (omd/nav #js {:className "bs-navbar-collapse"
                                :role "navigation"
                                :key 0
                                :id "top"}
                           (dom/li #js {:key "getting-started"
                                        :className (if (= "getting-started"
                                                          (:highlight @app-state))
                                                     "active")}
                                   (dom/a
                                    #js {:href "/gettings-started"}
                                    "Getting Started"))
                           (dom/li #js {:key "components"
                                        :className (if (= "components"
                                                          (:highlight @app-state))
                                                     "active")}
                                   (dom/a #js {:href "/components"} "Components")))))))

(defn draw-menu-bar [highlight]
  (if (string? highlight)
          (swap! app-state assoc :highlight highlight))
  (om/root nav-main app-state
           {:target (sel1 :#header)}))

(defroute root "/" []
  (draw-menu-bar nil)
  (om/root
   (fn [app owner]
     (reify
       om/IRender
       (render [_]
         (dom/main #js {:className "bs-docs-masthead"
                        :id "content"
                        :role "main"}
                   (dom/div #js {:className "container"}
                            (dom/span #js {:className "bs-docs-booticon bs-docs-booticon-lg bs-docs-booticon-outline"})
                            (dom/p #js {:className "lead"}
                                   "The most popular front-end framework, rebuilt for OM"))))))
   app-state
   {:target (sel1 :#main)}))

(defroute getting-started "/getting-started" []
  (println "why why?")
  (draw-menu-bar "getting-started")
  (om/root
   (fn [app owner]
     (reify
       om/IRender
       (render [_]
         (dom/div nil "notwhere to start"))))
   app-state
   {:target (sel1 :#main)}))

(defn side-bar []
  (omd/affix #js {:className "bs-docs-sidebar hidden-print"
                  :role "coomplementary"
                  :offsetTop 0
                  :offsetBottom 0}
             (omd/nav #js {:className "bs-docs-sidenav"
                           :ref "sideNav"}
                      (omd/sub-nav #js {:href "#buttons"
                                        :text "Buttons"}
                                   (omd/nav-item #js {:href "#btn-groups"} "Button groups")
                                   (omd/nav-item #js {:href "#btn-dropdowns"} "Button dropdowns"))
                      (omd/nav-item #js {:href "#panels"} "Panels")
                      (omd/nav-item #js {:href "#modals"} "Modals")
                      (omd/nav-item #js {:href "#tooltips"} "Tooltips")
                      (omd/nav-item #js {:href "#popovers"} "Popovers")
                      (omd/nav-item #js {:href "#progress"} "Progress Bar")
                      (omd/nav-item #js {:href "#navs"} "Navs")
                      (omd/nav-item #js {:href "#navbars"} "Navbars")
                      (omd/nav-item #js {:href "#togglable tabs"} "Togglable Tabs")
                      (omd/nav-item #js {:href "#pager"} "Pager")
                      (omd/nav-item #js {:href "#alerts"} "Alerts")
                      (omd/nav-item #js {:href "#carousel"} "Carousel")
                      (omd/nav-item #js {:href "#grids"} "Grids")
                      (omd/nav-item #js {:href "#labels"} "Labels")
                      (omd/nav-item #js {:href "#badges"} "Badges")
                      (omd/nav-item #js {:href "#jumbotron"} "Jumbotron")
                      (omd/nav-item #js {:href "#page header"} "Page Header")
                      (omd/nav-item #js {:href "#wells"} "Wells")
                      (omd/nav-item #js {:href "#glyphicons"} "Glyphicons")
                      (omd/nav-item #js {:href "#tables"} "Tables")
                      (omd/nav-item #js {:href "#input"} "Input"))
             (dom/a #js {:href "#top"
                         :className "back-to-top"} "Back to Top")))

(defn comp-buttons []
  (dom/div #js {:className "bs-docs-section"}
           (dom/h1 #js {:id "buttons" :className "page-header"}
                   "Buttons "
                   (dom/small nil "Button"))
           (dom/h2 #js {:id "buttons-options"} "Options")
           (dom/p nil "Use any of the available button style types to quickly create a styled button. Just modify the "
                  (dom/code nil "bsStyle")
                  " prop.")
           ;(omd/react-playground #js {:codeText "(+ 1 33 3)"})
           (dom/div #js {:className "bs-callout bs-callout-warning"}
                    (dom/h4 nil "Button spacing")
                    (dom/p nil "Because React doesn't output newlines between elements, buttons on the same line are displayed flush against each other. To preserve the spacing between multiple inline buttons, wrap your button group in "
                           (dom/code nil "(omd/button-toolbar nil)")
                           "."))
           ))

(defroute components "/components" []
  (println "wanker")
  (draw-menu-bar "components")
  (om/root
   (fn [app owner]
     (reify
       om/IRender
       (render [_]
         (dom/span 
          nil
          (dom/div #js {:className "bs-docs-header" :id "content"}
                   (dom/div #js {:className "container"}
                            (dom/h1 nil "Components")))
          (dom/div #js {:className "container bs-docs-container"}
                   (dom/div #js {:className "row"}
                            (dom/div #js {:className "col-md-9" :role "main"}
                                     (comp-buttons))
                            (dom/div #js {:className "col-md-3"}
                                     (side-bar))
                            ))
          )

         )))
   app-state
   {:target (sel1 :#main)}))

(om/root garden-style app-state
         {:target (sel1 :#garden-style)})

;; Quick and dirty history configuration.
;; (let [h (History.)]
;;    (goog.events/listen h EventType/NAVIGATE #(secretary/dispatch! (.-token %)))
;;    (doto h (.setEnabled true))
;;   )
;; (doto (History.)
;;   (goog.events/listen
;;    EventType/Navigate
;;    #(secretary/dispatch! (.-token %)))
;;   (.setEnabled true))

(secretary/dispatch! "/components")


