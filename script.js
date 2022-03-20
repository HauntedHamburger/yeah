const yea = document.querySelector('.yea').addEventListener('click', play)

function play(click) {
    const audio = document.getElementById('yeah');
    audio.play();
}

