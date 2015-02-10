(defproject om-bootstrap-demo "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2816"]
                 [org.omcljs/om "0.8.8"]
                 [om-bootstrap "0.0.4"]
                 [secretary "1.1.0"]
                 [prismatic/dommy "0.1.2"]
                 [garden "1.2.1"]]

  :plugins [[lein-cljsbuild "1.0.4"]
            [lein-simpleton "1.2.0"]]

  :source-paths ["src"]

  :cljsbuild { 
    :builds [{:id "om-bootstrap-try"
              :source-paths ["src"]
              :compiler {
                :output-to "js/om_bootstrap_demo.js"
                :output-dir "js/out"
                :optimizations :none
                :source-map true}}]})
