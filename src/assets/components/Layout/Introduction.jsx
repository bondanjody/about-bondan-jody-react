import pasFotoPic from '../../images/pas-foto.jpg';

const Introduction = props => {
    return  <div class="mt-4 w-full">
                <div class="container mx-auto w-80 h-80 rounded-full bg-cover" style={{backgroundImage:`url(${pasFotoPic})`}}>
                </div>
                {/* Description */}
                <div class="p-4 text-lg">
                    <p>My name is <span class="underline font-semibold">Bondan Jody Setyawan</span>. I am 23 years-old.</p>
                    <p>And I am a 🌐 Web Developer focusing on Fronted. </p>
                </div>
            </div>
}

export default Introduction;