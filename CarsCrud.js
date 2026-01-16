document.addEventListener('DOMContentLoaded', () => {

        const botonesLike = document.querySelectorAll('.btn-corazon');
        const aviso = document.getElementById('toast-aviso');

        botonesLike.forEach(boton => {
            boton.addEventListener('click', function() {
                const icono = this.querySelector('i');
                
                icono.classList.toggle('corazon-rojo');
                
                if (icono.classList.contains('corazon-rojo')) {
                    icono.classList.replace('bx-heart', 'bxs-heart');
                    
                    if(aviso) {
                        aviso.style.display = 'block';
                        setTimeout(() => {
                            aviso.style.display = 'none';
                        }, 2000);
                    }
                } else {
                    icono.classList.replace('bxs-heart', 'bx-heart');
                }
            });
        });
    });
