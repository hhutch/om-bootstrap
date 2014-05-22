(defproject om-bootstrap "0.0.3"
  :description "Om wrapper for React-Bootstrap"
  :url "http://github.com/hhutch/om-bootstrap"
  :license {:name "Eclipse"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :jvm-opts ^:replace ["-Xms512m" "-Xmx512m" "-server"]

  :source-paths  ["src"]

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2173" :scope "provided"]
                 [com.facebook/react "0.9.0.1"]]

  :plugins [[lein-cljsbuild "1.0.2"]]
  :cljsbuild {
    :builds [{:id "test"
              :source-paths ["src" "test"]
              :compiler {
                :preamble ["react/react.min.js"]
                :output-wrapper false
                :optimizations :simple}}]})
