import './index.css'
import dog from './assets/download.jpg';
import pow from './assets/pow.jpg'
export default function App() { 
  return (
    <>
    <div class=" text-3xl font-bold underline animate-bounce">Hello, world! Fun Fact About Me</div>
   <div class="flex justify-between"> <img className="ear-image" src={dog} alt="My Image" />
   <div class="bg-red-200 animate-bounce w-16 h-16 rounded-full mr-20">
  <img class="w-16 h-16 rounded-full" src={pow} alt="My Image" />
</div></div>
   <br /> 
    <br />
   <div  class="flex space-x-4">
    
   <div class="bg-yellow-200  animate-bounce duration-500">Dogs are known for their exceptional hearing abilities. They can detect sounds at frequencies much higher than humans and can even hear sounds four times farther away.</div>
   <div class="bg-gray-300  animate-pulse ">Dogs have an exceptional sense of smell. They have about 300 million scent receptors in their noses compared to the 6 million that humans have.</div>
   </div>
   <br />
   <br />
   <div  class="flex space-x-4">
    
   <div class="bg-orange-200  animate-bounce delay-200">Dogs have been domesticated for thousands of years and are often referred to as "man's best friend" due to their loyalty and companionship.</div>
   <div class="bg-red-300  animate-bounce">The Basenji dog breed is known as the "barkless dog" because it doesn't bark like other dogs. Instead, it produces unique vocalizations that sound more like yodeling.</div>
   </div>
   </>
  )
}
