$(document).ready(function() {
    var tones = [];
    for (i = 0; i < 16 * 10; i++) {
        tones.push(false);
    }

    color = function(x) {
        if (x) {
            return '#a00';
        } else {
            return '#eee';
        }
    }

    grid = d3.select('#grid');

    grid.selectAll('div').
        data(tones).
        enter().
        append('div').
        on('click', function(_, i) {tones[i] = !tones[i];console.log(i, tones[i]);update();});

    function update() {
        grid.selectAll('div').
            data(tones).
            style('background', color);
    }
    update();
    
    var t = 0;
    function sound() {
        t_local = t % 16;
        for (i = 0; i < 10; i++) {
            if (tones[i*16 + t_local]) {
                var el = $('<audio src="tone_'+(10 - i)+'.ogg" id="tone_0" preload></audio>');
                $(document).append(el);
                el.get(0).play();
                window.setTimeout(function() { el.remove(); }, 2000);
            }
        }
        window.setTimeout(sound, 300);
        t += 1;
    }

    sound();
});
