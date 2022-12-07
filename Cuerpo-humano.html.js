(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Cuerpo_humano.html_atlas_", frames: [[781,214,229,105],[0,1501,254,105],[781,642,128,105],[306,1088,304,304],[0,1394,855,105],[612,1195,284,105],[306,782,304,304],[612,1088,288,105],[612,782,304,304],[0,782,304,304],[781,321,205,105],[0,1088,304,304],[781,535,175,105],[781,428,197,105],[781,0,240,105],[781,107,233,105],[0,0,779,780]]}
];


// symbols:



(lib.CachedTexturedBitmap_101 = function() {
	this.initialize(ss["Cuerpo_humano.html_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_105 = function() {
	this.initialize(ss["Cuerpo_humano.html_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_109 = function() {
	this.initialize(ss["Cuerpo_humano.html_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_111 = function() {
	this.initialize(ss["Cuerpo_humano.html_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_28 = function() {
	this.initialize(ss["Cuerpo_humano.html_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_48 = function() {
	this.initialize(ss["Cuerpo_humano.html_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_57 = function() {
	this.initialize(ss["Cuerpo_humano.html_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_60 = function() {
	this.initialize(ss["Cuerpo_humano.html_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_63 = function() {
	this.initialize(ss["Cuerpo_humano.html_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_79 = function() {
	this.initialize(ss["Cuerpo_humano.html_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_81 = function() {
	this.initialize(ss["Cuerpo_humano.html_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_83 = function() {
	this.initialize(ss["Cuerpo_humano.html_atlas_"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_85 = function() {
	this.initialize(ss["Cuerpo_humano.html_atlas_"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_89 = function() {
	this.initialize(ss["Cuerpo_humano.html_atlas_"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_93 = function() {
	this.initialize(ss["Cuerpo_humano.html_atlas_"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_97 = function() {
	this.initialize(ss["Cuerpo_humano.html_atlas_"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.cuerpo = function() {
	this.initialize(ss["Cuerpo_humano.html_atlas_"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.bt13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("pie");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3));

	// Capa_1
	this.instance = new lib.CachedTexturedBitmap_109();
	this.instance.parent = this;
	this.instance.setTransform(76,-9.15,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_111();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-75.9,-75.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.9,-75.9,215.9,152);


(lib.bt11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("rodilla");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3));

	// Capa_1
	this.instance = new lib.CachedTexturedBitmap_105();
	this.instance.parent = this;
	this.instance.setTransform(82,12.85,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_111();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-75.9,-79.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.9,-79.9,284.9,152);


(lib.bt10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("brazo");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3));

	// Capa_1
	this.instance = new lib.CachedTexturedBitmap_101();
	this.instance.parent = this;
	this.instance.setTransform(67,14.4,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_111();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-75.9,-75.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.9,-75.9,257.4,152);


(lib.bt9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("mano");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3));

	// Capa_1
	this.instance = new lib.CachedTexturedBitmap_97();
	this.instance.parent = this;
	this.instance.setTransform(80,-17.15,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_111();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-75.9,-72.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.9,-72.9,272.4,152);


(lib.bt7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("cuello");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3));

	// Capa_1
	this.instance = new lib.CachedTexturedBitmap_93();
	this.instance.parent = this;
	this.instance.setTransform(59,26.85,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_111();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-75.9,-75.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.9,-75.9,254.9,155.3);


(lib.bt6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("boca");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3));

	// Capa_1
	this.instance = new lib.CachedTexturedBitmap_89();
	this.instance.parent = this;
	this.instance.setTransform(-169.95,-67,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_111();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-75.9,-75.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-169.9,-75.9,246,152);


(lib.bt5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("ojos");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3));

	// Capa_1
	this.instance = new lib.CachedTexturedBitmap_85();
	this.instance.parent = this;
	this.instance.setTransform(81,-30.15,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_111();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-75.9,-69.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.9,-69.9,244.4,152);


(lib.bt4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("nariz");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3));

	// Capa_1
	this.instance = new lib.CachedTexturedBitmap_81();
	this.instance.parent = this;
	this.instance.setTransform(-184.95,-40.15,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_83();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-75.9,-69.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-184.9,-69.9,261,152);


(lib.bt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("cabello");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(4));

	// Capa_1
	this.instance = new lib.CachedTexturedBitmap_60();
	this.instance.parent = this;
	this.instance.setTransform(-195.9,-104.15,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_79();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-75.9,-75.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195.9,-104.1,272,180.2);


(lib.BT2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("oidosonlineaudioconvertercom");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3));

	// Capa_1
	this.instance = new lib.CachedTexturedBitmap_48();
	this.instance.parent = this;
	this.instance.setTransform(-51,-130.1,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_63();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-75.9,-75.9,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_57();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-75.9,-75.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.9,-130.1,166.9,206.2);


// stage content:
(lib.Cuerpohumanohtml = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_17
	this.instance = new lib.bt13();
	this.instance.parent = this;
	this.instance.setTransform(808.7,830.65);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.bt13(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Capa_16
	this.instance_1 = new lib.bt11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(232.95,831.65);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.bt11(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Capa_15
	this.instance_2 = new lib.bt10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(810.75,683.7);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.bt10(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Capa_14
	this.instance_3 = new lib.bt9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(230.95,681.7);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.bt9(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Capa_13
	this.instance_4 = new lib.bt7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(810.75,541.75);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.bt7(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Capa_12
	this.instance_5 = new lib.bt6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(232.95,541.75);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2, false, new lib.bt6(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Capa_11
	this.instance_6 = new lib.bt5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(814.75,393.8);
	new cjs.ButtonHelper(this.instance_6, 0, 1, 2, false, new lib.bt5(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Capa_5
	this.instance_7 = new lib.bt4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(234.95,391.8);
	new cjs.ButtonHelper(this.instance_7, 0, 1, 2, false, new lib.bt4(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Capa_4
	this.instance_8 = new lib.bt3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(232.95,253.85);
	new cjs.ButtonHelper(this.instance_8, 0, 1, 2, false, new lib.bt3(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Capa_3
	this.instance_9 = new lib.BT2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(814.75,252.95);
	new cjs.ButtonHelper(this.instance_9, 0, 1, 2, false, new lib.BT2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Capa_1
	this.instance_10 = new lib.CachedTexturedBitmap_28();
	this.instance_10.parent = this;
	this.instance_10.setTransform(329.85,83.25,0.5,0.5);

	this.instance_11 = new lib.cuerpo();
	this.instance_11.parent = this;
	this.instance_11.setTransform(130,152);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(537.1,583.3,455.19999999999993,348.70000000000005);
// library properties:
lib.properties = {
	id: '9BC39013DAFED44DAFA91B0FFD647C8D',
	width: 1000,
	height: 1000,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Cuerpo_humano.html_atlas_.png", id:"Cuerpo_humano.html_atlas_"},
		{src:"sounds/boca.mp3", id:"boca"},
		{src:"sounds/brazo.mp3", id:"brazo"},
		{src:"sounds/cabello.mp3", id:"cabello"},
		{src:"sounds/cuello.mp3", id:"cuello"},
		{src:"sounds/mano.mp3", id:"mano"},
		{src:"sounds/nariz.mp3", id:"nariz"},
		{src:"sounds/oidosonlineaudioconvertercom.mp3", id:"oidosonlineaudioconvertercom"},
		{src:"sounds/ojos.mp3", id:"ojos"},
		{src:"sounds/pie.mp3", id:"pie"},
		{src:"sounds/rodilla.mp3", id:"rodilla"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['9BC39013DAFED44DAFA91B0FFD647C8D'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;