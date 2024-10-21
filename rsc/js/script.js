    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js')
            .then(function (registration) {
                console.log('Service Worker registered with scope:', registration.scope);
            }).catch(function (error) {
                console.log('Service Worker registration failed:', error);
            });
    }

    // Putar audio saat pengguna berinteraksi dengan halaman
    document.addEventListener('DOMContentLoaded', function() {
        const audio1 = new Audio('rsc/mp3/3.mp3');
    document.body.addEventListener('click', function() {
        audio1.loop = true;
    audio1.play().catch(function(error) {
        console.log('Audio playback failed:', error);
            });
        });
    });

    // Fungsi bersuara saat getar
    function vibration(duration) {
            if (navigator.vibrate) {
        navigator.vibrate(duration);
    const audio = new Audio('rsc/wav/chord.wav');
    audio.play();
            } else {
        console.log('Vibration API not supported.');
    const audio = new Audio('rsc/wav/critical.wav');
    audio.play();
            }
        }

    // Fungsi bergetar saat diklik
    document.addEventListener('DOMContentLoaded', function() {
            var campElement = document.getElementById('camp');
    if (campElement) {
        campElement.addEventListener('click', function () {
            //alert('Camp clicked!');
            vibration([100, 40, 100]);
        });
            }
        });