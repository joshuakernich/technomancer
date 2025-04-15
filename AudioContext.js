AudioContext = function(){
    let self = this;
    self.$el = $('<div>');
   let audio = {};

    self.add = function(id,src,volume,loop,autoplay){
        let attr = ''+(autoplay?'autoplay ':'')+(loop?'loop ':'');
        audio[id] = $(`<audio ${attr}>
            <source src=${src} type="audio/mpeg">
        </audio>`).appendTo(self.$el)[0];
        audio[id].volume = volume?volume:1;

        if(autoplay) audio[id].play();
    }

    self.play = function(id,restart){
        audio[id].play();
        if(restart) audio[id].currentTime = 0;
    }

    self.stop = function(id){
        audio[id].pause();
    }
}