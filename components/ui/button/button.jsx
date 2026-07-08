
export default function Button({children , className =""  , ...props}) {
  return (
    <button className={`text-[length:var( --text-button)] 
                        flex items-center gap-1 
                        w-fit px-5 py-2.5  text-[22px] font-medium tracking-widest 
                        rounded-xl  border-[3px] border-[var(--btn-border-color)] 
                        bg-[var(--btn-bg-color)] text-[var(--button-color)] 
                        cursor-pointer 
                        transition-all duration-500 
                        hover:bg-[var(--btn-hover-bg-color)] hover:text-[var(--btn-hover-color)]${className}`}
                        
                        {...props}
                        >
            {children}
    </button>
  )
}



