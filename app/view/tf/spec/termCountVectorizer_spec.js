/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/*DOCSTRING
	test url_parser.js on natural language samples*/

	const termCountVectorizer = __webpack_require__(1);// returns UrlParser

	var corpus = [['improv', 'bm', 'languag', 'model', 'examin', 'cs', 'otago', 'ac', 'homepag', 'andrew', 'paper'] ,
	['cikm', 'adpttf', 'pdf', 'sifaka', 'cs', 'uiuc', 'ylv', 'pub', 'cikm', 'adpttf'] ,
	['lectur', 'distribut', 'represent', 'stanford', 'class', 'cs', 'handout', 'lectur', 'distribut', 'represent'] ,
	['ieee', 'xplore', 'sign', 'ieeexplor', 'ieee', 'xplore', 'login', 'http', 'fieeexplor', 'ieee', 'org', 'fiel', 'authdecis'] ,
	['increment', 'cluster', 'short', 'text', 'stream', 'base', 'bm', 'ieee', 'xplore', 'docum', 'ieeexplor', 'ieee', 'docum', 'reload'] ,
	['viewcont', 'cgi', 'uknowledg', 'uki', 'cgi', 'viewcont', 'gradschool', 'these'] ,
	['whissel', 'john', 'pdf', 'uwspac', 'uwaterloo', 'bitstream', 'handl', 'whissel', 'john', 'sequenc'] ,
	['tutori', 'text', 'chunk', 'nltk', 'eeci', 'udel', 'trnka', 'cisc', 'lectur', 'dongq', 'chunk'] ,
	['cornel', 'nlp', 'nlp', 'cornel'] ,
	['craswel', 'trec', 'pdf', 'microsoft', 'en', 'research', 'wp', 'content', 'craswel', 'trec'] ,
	['', 'method', 'social', 'scienc', 'columbia', 'univers', 'graduat', 'school', 'art', 'scienc', 'gsas', 'columbia', 'content', 'academ', 'program', '', 'method', 'social', 'scienc'] ,
	['core', 'curriculum', '', 'social', 'scienc', 'scholar', 'program', 'carnegi', 'mellon', 'univers', 'cmu', 'hss', 'qsss', 'program', 'core', 'curriculum'] ,
	['clustercrit', 'pdf', 'cran', 'project', 'web', 'packag', 'clustercrit', 'vignett', 'clustercrit'] ,
	['way', 'defin', 'javascript', 'class', 'stoyan', 'phpi', 'phpi', 'way', 'defin', 'javascript', 'class'] ,
	['ben', 'alman', 'immedi', 'invok', 'function', 'express', 'iif', 'benalman', 'news', 'immedi', 'invok', 'function', 'express'] ,
	['commonj', 'note', 'requirej', 'doc', 'commonj', 'packag'] ,
	['start', 'browserifi', 'scotch', 'scotch', 'tutori', 'start', 'browserifi'] ,
	['organ', 'applic', 'modul', 'requir', 'js', 'backbon', 'js', 'tutori', 'cdnjs', 'cdnjs', 'librari', 'backbon', 'js', 'tutori', 'organ', 'backbon', 'modul'] ,
	['pattern', 'larg', 'scale', 'javascript', 'applic', 'architectur', 'addyosmani', 'largescalejavascript'] ,
	['substack', 'node', 'browserifi', 'browser', 'side', 'requir', 'node', 'js', 'github', 'substack', 'node', 'browserifi', 'usag'] ,
	['facad', 'javascript', 'design', 'pattern', 'exampl', 'dofactori', 'dofactori', 'javascript', 'facad', 'design', 'pattern'] ,
	['mvc', 'architectur', 'googl', 'chrome', 'develop', 'chrome', 'app', 'app', 'framework'] ,
	['github', 'takafumir', 'javascript', 'lemmat', 'javascript', 'lemmat', 'lemmat', 'librari', 'retriev', 'base', 'form', 'english', 'inflect', 'word', 'github', 'takafumir', 'javascript', 'lemmat'] ,
	['uhho', 'densiti', 'cluster', 'densiti', 'base', 'cluster', 'javascript', 'github', 'uhho', 'densiti', 'cluster'] ,
	['normal', 'nlp', 'compromis', 'nlp', 'compromis', 'wiki', 'github', 'nlp', 'compromis', 'nlp', 'compromis', 'wiki', 'normal'] ,
	['github', 'markbirbeck', 'pos', 'chunker', 'part', 'speech', 'chunker', 'github', 'markbirbeck', 'pos', 'chunker'] ,
	['nlp', 'stemmer', 'lemmat', 'stack', 'overflow', 'stackoverflow', 'question', 'stemmer', 'lemmat'] ,
	['pb', 'pdf', 'user', 'john', 'download', 'pb'] ,
	['https', 'mimno', 'infosci', 'cornel', 'jslda', 'index', 'html', 'mimno', 'infosci', 'cornel', 'jslda', 'index'] ,
	['survey', 'stem', 'algorithm', 'inform', 'retriev', 'informationr', 'ir', 'paper', 'wgak', 'vkrjri'] ,
	['python', 'nltk', 'stem', 'lemmat', 'demo', 'text', 'process', 'demo', 'stem'] ,
	['natur', 'stemmer', 'js', 'bbff', 'cfaa', 'cded', 'ae', 'bc', 'naturalnod', 'natur', 'github', 'github', 'naturalnod', 'natur', 'blob', 'bbff', 'cfaa', 'cded', 'ae', 'bc', 'lib', 'natur', 'stemmer', 'stemmer', 'js'] ,
	['natur', 'lib', 'natur', 'stemmer', 'bbff', 'cfaa', 'cded', 'ae', 'bc', 'naturalnod', 'natur', 'github', 'github', 'naturalnod', 'natur', 'tree', 'bbff', 'cfaa', 'cded', 'ae', 'bc', 'lib', 'natur', 'stemmer'] ,
	['github', 'heraldicsandfox', 'stemmer', 'store', 'code', 'run', 'larg', 'batch', 'stem', 'topic', 'model', 'evalu', 'htcondor', 'mallet', 'github', 'heraldicsandfox', 'stemmer'] ,
	['stemmer', 'lucen', 'java', 'user', 'gossam', 'thread', 'list', 'lucen', 'java', 'user'] ,
	['java', 'major', 'differ', 'benefit', 'porter', 'lancast', 'stem', 'algorithm', 'stack', 'overflow', 'stackoverflow', 'question', 'major', 'differ', 'benefit', 'porter', 'lancast', 'stem', 'alg'] ,
	['github', 'kristopol', 'porter', 'stemmer', 'github', 'kristopol', 'porter', 'stemmer'] ,
	['github', 'localvoid', 'stemr', 'javascript', 'typescript', 'implement', 'snowbal', 'english', 'porter', 'stemmer', 'algorithm', 'github', 'localvoid', 'stemr'] ,
	['stem', 'python', 'packag', 'index', 'pypi', 'python', 'pypi', 'stem'] ,
	['evandempsey', 'porter', 'stemmer', 'python', 'implement', 'martin', 'porter', 'updat', 'algorithm', 'stemmer', 'github', 'evandempsey', 'porter', 'stemmer'] ,
	['pyport', 'stemmer', 'py', 'master', 'mdirolf', 'pyport', 'github', 'mdirolf', 'pyport', 'blob', 'master', 'stemmer', 'py'] ,
	['fauxpars', 'porter', 'js', 'porter', 'text', 'stem', 'javascript', 'github', 'fauxpars', 'porter', 'js'] ,
	['stemr', 'stemr', 'ts', 'master', 'localvoid', 'stemr', 'github', 'localvoid', 'stemr', 'blob', 'master', 'src', 'stemr', 'ts'] ,
	['porter', 'stemmer', 'porterstemm', 'js', 'master', 'kristopol', 'porter', 'stemmer', 'github', 'kristopol', 'porter', 'stemmer', 'blob', 'master', 'porterstemm', 'js'] ,
	['kristopol', 'porter', 'stemmer', 'javascript', 'implement', 'porter', 'stemmer', 'github', 'kristopol', 'porter', 'stemmer'] ,
	['jedp', 'porter', 'stemmer', 'martin', 'porter', 'stemmer', 'node', 'js', 'github', 'jedp', 'porter', 'stemmer'] ,
	['evilstreak', 'js', 'stemmer', 'porter', 'stemmer', 'implem', 'javascript', 'github', 'evilstreak', 'js', 'stemmer'] ,
	['wooorm', 'stemmer', 'pretti', 'fast', 'implement', 'porter', 'stemmer', 'algorithm', 'github', 'wooorm', 'stemmer'] ,
	['multimedia', 'forens', 'secur', 'foundat', 'innov', 'applic', 'googl', 'book', 'book', 'googl', 'book', 'dgdqaaqbaj', 'pg', 'pa', 'lpg', 'pa', 'dq', 'krovetz', 'stemmer', 'implement', 'bl', 'ot', 'cmgdjvvlym', 'sig', 'bkgxqd', 'mmuptp', 'rdcehkqz', 'pr', 'hl', 'en', 'sa', 'ved', 'ahukewiuyru', 'tatrahvd', 'mkhswfd'] ,
	['process', 'text', 'pp', 'pdf', 'cs', 'cornel', 'cours', 'cs', 'fa', 'lectur', 'process', 'text', 'pp'] ,
	['lunr', 'js', 'stemmer', 'js', 'ef', 'bacbc', 'aebf', 'bf', 'olivernn', 'lunr', 'js', 'github', 'olivernn', 'lunr', 'js', 'blob', 'ef', 'bacbc', 'aebf', 'bf', 'lib', 'stemmer', 'js'] ,
	['natur', 'porter', 'stemmer', 'js', 'bbff', 'cfaa', 'cded', 'ae', 'bc', 'naturalnod', 'natur', 'github', 'github', 'naturalnod', 'natur', 'blob', 'bbff', 'cfaa', 'cded', 'ae', 'bc', 'lib', 'natur', 'stemmer', 'porter', 'stemmer', 'js'] ,
	['manifold', 'learn', 'scikit', 'learn', 'document', 'scikit', 'learn', 'stabl', 'modul', 'manifold'] ,
	['node', 'js', 'debug', 'consol', 'atom', 'reddit', 'atom', 'comment', 'cw', 'nodej', 'debuggingconsol'] ,
	['town', 'miss', 'puglia', 'neverendingvoyag', 'town', 'miss', 'puglia'] ,
	['okapi', 'bm', 'wikipedia', 'en', 'wikipedia', 'wiki', 'okapi', 'bm'] ,
	['pluggabl', 'similar', 'algorithm', 'elasticsearch', 'definit', 'guid', 'elast', 'elast', 'guid', 'en', 'elasticsearch', 'guid', 'current', 'pluggabl', 'similarit'] ,
	['javascript', 'regex', 'split', 'camel', 'case', 'stack', 'overflow', 'stackoverflow', 'question', 'regex', 'split', 'camel', 'case'] ,
	['java', 'regex', 'split', 'camelcas', 'titlecas', 'advanc', 'stack', 'overflow', 'stackoverflow', 'question', 'regex', 'split', 'camelcas', 'titlecas', 'advanc'] ,
	['english', 'porter', 'stem', 'algorithm', 'snowbal', 'tartarus', 'algorithm', 'english', 'stemmer'] ,
	['github', 'fortnightlab', 'snowbal', 'js', 'javascript', 'implement', 'popular', 'snowbal', 'word', 'stem', 'nlp', 'algorithm', 'github', 'fortnightlab', 'snowbal', 'js'] ,
	['filtret', 'air', 'condition', 'filter', 'inch', 'inch', 'replac', 'room', 'air', 'condition', 'filter', 'amazon', 'amazon', 'filtret', 'condition', 'inch', 'inch', 'dp', 'bo', 'iw', 'cm', 'cr', 'arp', 'product', 'top'] ,
	['home', 'audio', 'system', 'stereo', 'music', 'favorit', 'classic', 'compos', 'home', 'audio', 'system'] ,
	['certif', 'emerg', 'automot', 'technolog', 'isd', 'engin', 'umich', 'profession', 'program', 'emerg', 'technolog', 'onlin', 'telemat'] ,
	['choos', 'eye', 'doctor', 'ophthalmologist', 'optometrist', 'allaboutvis', 'eye', 'doctor', 'choos'] ,
	['data', 'scientist', 'job', 'detail', 'sjob', 'brassr', 'tgnewui', 'search', 'home', 'homewithpreload', 'job', 'job', 'partner', 'site', 'code'] ,
	['extens', 'extens'] ,
	['hike', 'nate', 'park', 'glacier', 'yellowston', 'teton', 'nate', 'geograph', 'expedit', 'nationalgeographicexpedit', 'expedit', 'hike', 'nate', 'park', 'glacier', 'yellowston', 'teton', 'adventur'] ,
	['hiroshima', 'new', 'yorker', 'newyork', 'magazin', 'hiroshima', 'intc', 'popular'] ,
	['bruckner', 'gramophon', 'uk', 'gramophon', 'general', 'discuss', 'bruckner'] ,
	['imput', 'miss', 'valu', 'build', 'estim', 'scikit', 'learn', 'document', 'scikit', 'learn', 'stabl', 'auto', 'exampl', 'miss', 'valu', 'miss', 'valu', 'py'] ,
	['javascript', 'point', 'es', 'map', 'key', 'string', 'softwar', 'engin', 'stack', 'exchang', 'softwareengin', 'stackexchang', 'question', 'point', 'es', 'map', 'key', 'string'] ,
	['match', 'perform', 'python', 'list', 'ndarray', 'panda', 'benjamin', 'gross', 'benjaminmgross', 'match', 'perform', 'python', 'listss', 'ndarray', 'panda'] ,
	['optician', 'optometrist', 'ophthalmologist', 'vsp', 'optometrist'] ,
	['photo', 'workshop', 'switzerland', 'nate', 'geograph', 'expedit', 'nationalgeographicexpedit', 'expedit', 'switzerland', 'tour', 'photo', 'workshop'] ,
	['senior', 'data', 'scientist', 'job', 'thecapitalgroup', 'job', 'new', 'york', 'senior', 'data', 'scientist', 'ny', 'feed', 'utm'] ,
	['senior', 'data', 'scientist', 'vertic', 'bloomberg', 'new', 'york', 'ny', 'dice', 'dice', 'job', 'senior', 'data', 'scientist', 'vertic', 'bloomberg', 'new', 'york', 'ny', 'ic', 'sr', 'data', 'scientist', 'fantast'] ,
	['south', 'shore', 'axess', 'shelf', 'bookcas', 'chocol', 'bjs', 'wholesal', 'club', 'bjs', 'south', 'shore', 'axess', 'shelf', 'bookcas', 'chocol', 'product', 'dim'] ,
	['south', 'shore', 'axess', 'shelf', 'bookcas', 'pure', 'black', 'bjs', 'wholesal', 'club', 'bjs', 'south', 'shore', 'axess', 'shelf', 'bookcas', 'pure', 'black', 'product', 'dim'] ,
	['southern', 'africa', 'adventur', 'nate', 'geograph', 'expedit', 'nationalgeographicexpedit', 'expedit', 'southern', 'africa', 'hike', 'safari', 'cultur', 'adventur'] ,
	['sri', 'lanka', 'adventur', 'nate', 'geograph', 'expedit', 'nationalgeographicexpedit', 'expedit', 'sri', 'lanka', 'hike', 'cultur', 'wildlif', 'adventur'] ,
	['sweden', 'dogsled', 'icehotel', 'nate', 'geograph', 'expedit', 'nationalgeographicexpedit', 'expedit', 'sweden', 'dogsled'] ,
	['st', 'centuri', 'life', 'list', 'great', 'new', 'place', 'travel', 'smithsonian', 'smithsonianmag', 'travel', 'st', 'centuri', 'life', 'list'] ,
	['effect', 'high', 'skill', 'immigr', 'polici', 'firm', 'evid', 'visa', 'lotteri', 'nber', 'paper'] ,
	['winter', 'japan', 'photographi', 'expedit', 'nate', 'geograph', 'expedit', 'nationalgeographicexpedit', 'expedit', 'tokyo', 'hokkaido', 'winter', 'japan', 'photographi', 'tour'] ,
	['essenti', 'bach', 'record', 'wqxr', 'wqxr', 'stori', 'essenti', 'bach', 'record'] ,
	['classic', 'net', 'bach', 'cantata', 'listen', 'guid', 'classic', 'music', 'comp', 'lst', 'work', 'bachj', 'rateindx'] ,
	['bach', 'absolut', 'piec', 'quora', 'quora', 'bach', 'absolut', 'piec'] ,
	['survey', 'record', 'bach', 'flute', 'sonata', 'audiophilia', 'audiophilia', 'review', 'survey', 'record', 'js', 'bach', 'flute', 'sonata'] ,
	['bach', 'flute', 'sonata', 'gramophon', 'uk', 'gramophon', 'editori', 'bach', 'flute', 'sonata'] ,
	['bach', 'st', 'matthew', 'passion', 'gramophon', 'uk', 'gramophon', 'editori', 'bach', 'st', 'matthew', 'passion'] ,
	['bach', 'st', 'matthew', 'passion', 'buyer', 'guid', 'bach', 'classic', 'fm', 'classicfm', 'compos', 'bach', 'guid', 'js', 'bach', 'st', 'matthew', 'passion', 'pmolbzeuwrdedg'] ,
	['essenti', 'bach', 'cds', 'download', 'buy', 'deccaclass', 'cat'] ,
	['classic', 'net', 'basic', 'repertoir', 'list', 'bach', 'classic', 'music', 'comp', 'lst', 'bachj'] ,
	['high', 'end', 'stereo', 'speaker', 'loudspeak', 'favorit', 'classic', 'compos', 'high', 'end', 'stereo', 'speaker'] ,
	['eclass', 'wagner', 'wagner', 'eclass', 'compos', 'wagner', 'richard', 'wagner', 'wagner'] ,
	['eclass', 'wagner', 'ring', 'der', 'orchestr', 'highlight', 'eclass', 'compos', 'wagner', 'richard', 'wagner', 'ring', 'der', 'orchestr', 'highlight'] ,
	['eclass', 'wagner', 'highlight', 'tannhaus', 'eclass', 'compos', 'wagner', 'richard', 'wagner', 'highlight', 'tannhaus'] ,
	['greatest', 'classic', 'compos', 'digitaldreamdoor', 'page', 'classic', 'comp'] ,
	['classic', 'cd', 'guid', 'top', 'essenti', 'schubert', 'cds', 'mp', 'start', 'classic', 'music', 'collect', 'classicalcdguid', 'compos', 'schubert'] ,
	['greatest', 'compos', 'discog', 'list', 'greatest', 'compos'] ,
	['greatest', 'piec', 'classic', 'music', 'wikipedia', 'en', 'wikipedia', 'wiki', 'greatest', 'piec', 'classic', 'music'] ,
	['favorit', 'sibelius', 'symphoni', 'talkclass', 'favorit', 'sibelius', 'symphoni'] ,
	['symphoni', 'haydn', 'wikipedia', 'en', 'wikipedia', 'wiki', 'symphoni', 'haydn'] ,
	['classic', 'net', 'cd', 'buy', 'guid', 'opera', 'recommend', 'classic', 'music', 'guid', 'opera'] ,
	['coloratura', 'soprano', 'aria', 'talkclass', 'coloratura', 'soprano', 'aria'] ,
	['johann', 'sebastian', 'bach', 'nikolaus', 'harnoncourt', 'robin', 'gritton', 'giovanni', 'antonini', 'concentus', 'musicus', 'wien', 'il', 'giardino', 'armonico', 'leonhardt', 'consort', 'ton', 'koopman', 'andrea', 'staier', 'herbert', 'tachezi', 'gustav', 'leonhardt', 'eduard', 'ller', 'sigurd', 'braun', 'bach', 'complet', 'bach', 'edition', 'sampler', 'amazon', 'music', 'amazon', 'dp', 'wl', 'dp', 'pc', 'ttl', 'encod', 'col', 'xae', 'wple', 'coli', 'igr', 'gvxcvoa'] ,
	['new', 'york', 'new', 'york', 'job', 'career', 'metronewyorkjob', 'metronewyorkjob'] ,
	['ch', 'pdf', 'www', 'user', 'cs', 'umn', 'kumar', 'dmbook', 'ch'] ,
	['hartigan', 'pdf', 'cse', 'ucsd', 'avattani', 'paper', 'hartigan'] ,
	['hartigan', 'index', 'initi', 'mean', 'detect', 'similar', 'text', 'cluster', 'docum', 'plagiar', 'indic', 'medwelljourn', 'abstract', 'doi', 'ajit'] ,
	['ijcb', 'pdf', 'suendermann', 'su', 'ijcb'] ,
	['proceed', 'asmda', 'dvi', 'citeseerx', 'ist', 'psu', 'viewdoc', 'download', 'doi', 'rep', 'rep'] ,
	['cluster', 'correct', 'ppt', 'cs', 'princeton', 'cours', 'spr', 'cos', 'class', 'note', 'cluster', 'topost'] ,
	['cluster', 'rdd', 'base', 'api', 'spark', 'document', 'spark', 'apach', 'doc', 'latest', 'mllib', 'cluster'] ,
	['return', 'scale', 'wikipedia', 'en', 'wikipedia', 'wiki', 'return', 'scale'] ,
	['abraham', 'lincoln', 'famili', 'church', 'abrahamlincolnonlin', 'lincoln', 'site', 'pew'] ,
	['abraham', 'lincoln', 'springfield', 'photo', 'tour', 'abrahamlincolnonlin', 'lincoln', 'galleri', 'sfphoto'] ,
	['abraham', 'lincoln', 'state', 'capitol', 'abrahamlincolnonlin', 'lincoln', 'site', 'capitol'] ,
	['scenic', 'place', 'michigan', 'wed', 'pictur', 'photo', 'net', 'wed', 'social', 'event', 'photographi', 'forum', 'photo', 'wed', 'photographi', 'elch'] ,
	['cach', 'river', 'state', 'natur', 'area', 'googl', 'search', 'googl', 'search', 'cach', 'river', 'state', 'natur', 'area', 'newwindow', 'es', 'sm', 'biw', 'bih', 'lnms', 'sa', 'ei', 'ebdjvmaei'] ,
	['explor', 'area', 'wisconsin', 'frommer', 'frommer', 'destin', 'wisconsin'] ,
	['indiana', 'amish', 'town', 'thing', 'discov', 'america', 'discoveramerica', 'usa', 'experi', 'indiana', 'shipshewana'] ,
	['mark', 'twain', 'childhood', 'home', 'thing', 'discov', 'america', 'discoveramerica', 'usa', 'experi', 'missouri', 'hannib'] ,
	['michigan', 'photo', 'locat', 'midwest', 'naturephotograph', 'locat', 'locat', 'state', 'michigan'] ,
	['springfield', 'site', 'abraham', 'lincoln', 'abrahamlincolnonlin', 'lincoln', 'site', 'springfd'] ,
	['sleep', 'bear', 'dune', 'nate', 'lakeshor', 'roam', 'boomer', 'theroamingboom', 'sleep', 'bear', 'dune', 'nate', 'lakeshor']];

	termCountVectorizer(corpus).forEach(function(tfMap){
	  document.write(JSON.stringify(tfMap));
	  document.write('<br>');
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	var termCountVectorizerModule = (function()
	{
	  /**
	   * 1. Callback fcn taking an array (i.e. document) element; tallies how many times each term (element) is
	   * found in document.
	   */
	  function tallyTermFreq(runningCountTable, curTerm){
	    if(curTerm in runningCountTable){
	      runningCountTable[curTerm]++;// current term is found in collection of previous terms.
	    }
	    else{
	      runningCountTable[curTerm] = 1;
	    }
	    return runningCountTable;
	  }

	  return function(corpus)//convert an input corpus to an array of term-freq dicts
	        {
	          return corpus.map(function(document)
	          {
	            return document.reduce(tallyTermFreq, new Map());
	          });
	        };
	})();
	module.exports = termCountVectorizerModule;


/***/ }
/******/ ]);