(defproject om-bootstrap-demo "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2277"]
                 [om "0.6.5"]
                 [om-bootstrap "0.0.4"]]

  :plugins [[lein-cljsbuild "1.0.3"]
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
