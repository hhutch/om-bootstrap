(ns om-bootstrap.dom)

(def tags
  '[[Accordion accordion]
    [Alert alert]
    [Badge badge]
    [Button button]
    [ButtonGroup button-group]
    [ButtonToolbar button-toolbar]
    [Carousel carousel]
    [CarouselItem carousel-item]
    [DropdownButton dropdown-button]
    [Glyphicon glyphicon]
    [Jumbotron jumbotron]
    [Label label]
    [MenuItem menu-item]
    [Modal modal]
    [ModalTrigger modal-trigger]
    [Nav nav]
    [NavItem nav-item]
    [OverlayTrigger overlay-trigger]
    [PageHeader page-header]
    [Panel panel]
    [PanelGroup panel-group]
    [Popover popover]
    [ProgressBar progress-bar]
    [SplitButton split-button]
    [TabbedArea tabbed-area]
    [TabPane tab-pane]
    [Tooltip tooltip]
    [Well well]])

(defn ^:private gen-react-dom-inline-fn [tag]
  `(defmacro ~(second tag) [opts# & children#]
     `(~'~(symbol "js" (str "ReactBootstrap." (name (first tag)))) ~opts# ~@children#)))

(defmacro ^:private gen-react-dom-inline-fns []
  `(do
     ~@(clojure.core/map gen-react-dom-inline-fn tags)))

(gen-react-dom-inline-fns)

(defn ^:private gen-react-dom-fn [tag]
  `(defn ~(second tag) [opts# & children#]
     (.apply ~(symbol "js" (str "ReactBootstrap." (name (first tag)))) nil (cljs.core/into-array (cons opts# children#)))))

(defmacro ^:private gen-react-dom-fns []
  `(do
     ~@(clojure.core/map gen-react-dom-fn tags)))
