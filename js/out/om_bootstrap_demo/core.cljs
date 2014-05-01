(ns om-bootstrap-demo.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [om-bootstrap.dom :as omd]))

(enable-console-print!)

(def ^:private meths
  {:get "GET"
   :put "PUT"
   :post "POST"
   :delete "DELETE"})

(defn json-xhr [{:keys [method url data on-complete]}]
  (let [xhr (gnet/xhr-connection.)]
    (gevent/listen xhr :success
                   (fn [e]
                     (on-complete
                      (.getResponseText xhr))))
    (gnet/transmit xhr url (meths method) data)))

(def app-state
  (atom
   {:tasks
    [{:name "get milk"}
     {:name "grate cheese"}
     {:name "wash dishes"}]}))
(om/root
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

(defn task-view [task owner]
  (println "yolo: " (:name task))
  (reify
    om/IRender
    (render [this]
      (dom/li #js {:className "well"}
              (:name task)))))

(defn task-list [app owner]
  (reify
    om/IRender
    (render [this {:keys [editing]}]
      (dom/div #js {:id "tasks"}
               (dom/h2 nil "Tasks")
               (apply dom/ul nil
                      (om/build-all task-view (:tasks app)))))))

(om/root task-list app-state
         {:target (. js/document (getElementById "tasks"))})
