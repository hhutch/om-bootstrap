(defproject om-bootstrap "0.0.3"
  :description "Om wrapper for React-Bootstrap"
  :url "http://github.com/hhutch/om-bootstrap"
  :license {:name "Eclipse"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :jvm-opts ^:replace ["-Xms512m" "-Xmx512m" "-server"]

  :source-paths  ["src"]

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2816" :scope "provided"]
                 [cljsjs/react "0.12.2-5"]]

  :plugins [[lein-cljsbuild "1.0.4"]]
  :cljsbuild {
    :builds [{:id "test"
              :source-paths ["src" "test"]
              :compiler {
                :preamble ["react/react.min.js"]
                :output-wrapper false
                :optimizations :simple}}]})
