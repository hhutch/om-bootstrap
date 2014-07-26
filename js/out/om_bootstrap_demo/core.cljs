(ns om-bootstrap-demo.core
  (:require-macros [dommy.macros :refer [node sel sel1]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [om-bootstrap.dom :as omd]
            [secretary.core :as secretary :include-macros true :refer [defroute]]
            [dommy.utils :as utils]
            [dommy.core :as dommy]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            )
  (:import goog.History)
  )


(enable-console-print!)
(secretary/set-config! :prefix "#")

(def app-state (atom {}))

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

(defroute components "/components" []
  (println "wanker")
  (draw-menu-bar "components")
  (om/root
   (fn [app owner]
     (reify
       om/IRender
       (render [_]
         (dom/div nil "golfwang"))))
   app-state
   {:target (sel1 :#main)}))

(println "problems?")

;; Quick and dirty history configuration.
;; #_(let [h (History.)]
;;    (goog.events/listen h EventType/NAVIGATE #(secretary/dispatch! (.-token %)))
;;    (doto h (.setEnabled true))
;;   )
;; (doto (History.)
;;   (goog.events/listen
;;    EventType/Navigate
;;    #(secretary/dispatch! (.-token %)))
;;   (.setEnabled true))
(secretary/dispatch! "/")
