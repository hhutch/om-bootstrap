(ns om-bootstrap-demo.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [om-bootstrap.dom :as omd]))

(enable-console-print!)


(def app-state (atom {}))

#_(om/root
 (fn [app owner]
   (reify
     om/IRender
     (render [this]
       (dom/div #js {:className "row-fluid"}
                (dom/form #js {:className "form well"}
                          (dom/div
                           #js {:className "row-fluid"}
                           (dom/input
                            #js {:className "input-block-level" :id "in-it"})
                           (omd/button-group
                            nil
                            (omd/button
                             #js {:bsStyle "primary"
                                  :bsSize "small"
                                  :onClick #(json-xhr
                                             {:method :post
                                              :url (str "http://localhost:3000/tasks")
                                              :data (str "name="
                                                         (.-value
                                                          (. js/document
                                                             (getElementById "in-it"))))
                                              :on-complete (fn [res]
                                                             (println "response: " res))})}
                             "submit")
                            (omd/button
                             #js {:bsStyle "danger"
                                  :bsSize "small"
                                  :onClick #(json-xhr
                                             {:method :post
                                              :url (str "http://localhost:3000/tasks")
                                              :data (str "name="
                                                         (.-value
                                                          (. js/document
                                                             (getElementById "in-it"))))
                                              :on-complete (fn [res]
                                                             (println "response: " res))})}
                             "cancel"))))))))
 app-state
 {:target (. js/document (getElementById "entry"))})


(defn nav-header [app owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:className "container"}
               (omd/nav #js {:bsStyle "tabs"
                             :className "collapse navbar-collapse bs-navbar-collapse"}
                        (omd/nav-item nil "Om Bootstrap")
                        (omd/nav-item nil "Getting started")
                        (omd/nav-item nil "Components"))))))

(defn nav-main [app owner]
  (reify
    om/IRender
    (render [this]
      (omd/navbar #js {:componentClass dom/header
                       :staticTop ""
                       :className "bs-docs-nav"
                       :role "banner"}
                  (dom/div #js {:className "container"}
                           "foo")))))
(om/root nav-main app-state
         {:target (. js/document (getElementById "header"))})
