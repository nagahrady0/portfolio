import Image from "next/image";
import './card.css';

const Card = ({ link, src, title, technology }) => {
  return (
    <div  className="max-[767px]:w-[90%] relative overflow-hidden h-[280px]" data-aos="fade-up">
      <a href={link} target="_blank">
        <Image src={`/projects${src}`} alt={title} width={300} height={300} className="w-full h-full cursor-pointer"/>
        <span className="before:absolute 
                         before:content-[''] 
                         before:bg-[var(--second-color)] 
                         before:transition-all 
                         before:duration-300
                         before:w-[2px] 
                         before:h-0 

                         before:left-0 
                         before:bottom-0 
                         
                         after:absolute 
                         after:content-[''] 
                         after:bg-[var(--second-color)] 
                         after:transition-all 
                         after:duration-300 
                         after:w-[2px] 
                         after:h-0 

                         after:right-0 
                         after:top-0
                         "
                         
                         ></span>
        <span className="before:absolute 
                         before:content-[''] 
                         before:bg-[var(--second-color)] 
                         before:transition-all 
                         before:duration-300 
                         before:h-[2px] 
                         before:w-0 

                         before:left-0
                         before:top-0
                         
                         after:absolute 
                         after:content-[''] 
                         after:bg-[var(--second-color)] 
                         after:transition-all 
                         after:duration-300 
                         after:h-[2px] 
                         after:w-0

                         after:right-0
                         after:bottom-0
                         "
                         ></span>
        <div className="absolute left-[25px] text-[var(--second-color)] p-[10px] bg-[rgba(0,0,0,0.5)] shadow-[1px_1px_5px_rgba(0,0,0,0.5)] text-[22px] -top-[100px]">{title}</div>
        <div className="absolute left-[25px] text-[var(--second-color)] p-[10px] bg-[rgba(0,0,0,0.5)] shadow-[1px_1px_5px_rgba(0,0,0,0.5)] text-[22px] -bottom-[100px]">{technology}</div>
      </a>
    </div>
  );
};

export default Card;