(ns om-bootstrap.dom)

(def tags
  '[[Accordion accordion]
    [Affix affix]
    [Alert alert]
    [Badge badge]
    [Button button]
    [ButtonGroup button-group]
    [ButtonToolbar button-toolbar]
    [Carousel carousel]
    [CarouselItem carousel-item]
    [Col col]
    [DropdownButton dropdown-button]
    [DropdownMenu dropdown-menu]
    [Glyphicon glyphicon]
    [Grid grid]
    [Input input]
    [Jumbotron jumbotron]
    [Label label]
    [MenuItem menu-item]
    [Modal modal]
    [ModalTrigger modal-trigger]
    [Nav nav]
    [Navbar navbar]
    [NavItem nav-item]
    [OverlayTrigger overlay-trigger]
    [PageHeader page-header]
    [Panel panel]
    [PanelGroup panel-group]
    [Popover popover]
    [ProgressBar progress-bar]
    [Row row]
    [SplitButton split-button]
    [SubNav sub-nav]
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
