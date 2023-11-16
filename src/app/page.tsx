import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-1 justify-center min-h-screen bg-[#2B2D42] relative overflow-hidden">
      <Image src="/radial-top-left.png" className="absolute top-0 left-0 z-10" width={1610} height={962} alt="" />
      <Image src="/radial-bottom-right.png" className="absolute bottom-0 right-0 z-10" width={948} height={1263} alt="" />
      {/* <div className="absolute w-[720px] h-[720px] rounded-[720px] bg-[#0083FE] top-[-500px] left-[13%] blur-[350px] flex justify-center z-10">
        <div className="w-[500px] h-[500px] rounded-[500px] bg-[#0083FE] opacity-50 self-center blur-[150px] z-10">
        </div>
      </div>

      <div className="absolute w-[720px] h-[720px] rounded-[720px] bg-[#6D6F84] bottom-[57px] right-[-400px] blur-[350px] flex justify-center z-10">
        <div className="w-[500px] h-[500px] rounded-[500px] bg-[#6D6F84] opacity-50 self-center blur-[150px] z-[15px]">
        </div>
      </div> */}

      <div className="h-[618px] w-[1200px] bg-no-repeat flex justify-end self-center relative z-20" style={{ backgroundImage: "url('/image.png')" }}>
        <div className="w-[995px] h-[511px] self-center">
          <h1 className="druk-wide-bold text-white text-[68px] leading-[94px]">Turn Your Website Into Your Best Sales Person</h1>

          <div className="flex justify-end">
            <div className="w-[582px] mt-[30px]">
              <h3 className="rubik-300 leading-[33px] text-[22px] text-[#F7F7FF]">Triple your sales with a pixel-perfect website. <br />
              At SmartSite Studio, we don’t just design and write code, we build a revenue-driving machine for your business.</h3>
              
              <div className="mt-10">
                <a href="/" className="py-[21px] px-[52px] inline-block druk-wide-bold text-white text-base bg-[#FF632C] rounded-[30px]">Talk to Us</a>
                <a href="/" className="py-[21px] px-[52px] inline-block druk-wide-bold text-white text-base border ms-5 border-[#0083FE] rounded-[30px]">See Portfolio</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
