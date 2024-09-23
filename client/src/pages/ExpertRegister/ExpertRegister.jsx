// src/App.jsx
import React from 'react';
import '../../index.css'; // ודא שייבאת את קובץ ה-CSS שלך

function ExpertRegister() {
  return (
    <div className="p-8">
      <header className="header">
        <h1>עמוד תצוגה לעיצוב</h1>
      </header>

      <section className="my-8">
        <h2 className="text-xl font-bold mb-4">כפתורים</h2>
        <button className="bg-button-bg text-button-text hover:bg-button-hover-bg px-4 py-2 rounded">
          כפתור רגיל
        </button>
        <button className="bg-button-bg text-button-text hover:bg-button-hover-bg px-4 py-2 rounded mt-4">
          כפתור נוסף
        </button>
      </section>

      <section className="my-8">
        <h2 className="text-xl font-bold mb-4">שדות קלט</h2>
        <input type="text" placeholder="הכנס את שמך" className="border border-input-border rounded px-4 py-2 w-full mb-4" />
        <input type="email" placeholder="הכנס את המייל שלך" className="border border-input-border rounded px-4 py-2 w-full mb-4" />
        <input type="password" placeholder="הכנס סיסמה" className="border border-input-border rounded px-4 py-2 w-full mb-4" />
      </section>

      <section className="my-8">
        <h2 className="text-xl font-bold mb-4">תיבות טקסט</h2>
        <textarea placeholder="כתוב את ההודעה שלך" className="border border-textarea-border rounded px-4 py-2 w-full mb-4" rows="4"></textarea>
      </section>

      <section className="my-8">
        <h2 className="text-xl font-bold mb-4">תיבות בחירה</h2>
        <select className="border border-select-border rounded px-4 py-2 w-full mb-4">
          <option>אפשרות 1</option>
          <option>אפשרות 2</option>
        </select>
      </section>

      <section className="my-8">
        <h2 className="text-xl font-bold mb-4">תיבות סימון</h2>
        <label htmlFor="checkbox" className="flex items-center mb-4">
          <input type="checkbox" id="checkbox" className="accent-button-bg mr-2" />
          סימון תיבה
        </label>
      </section>

      <section className="my-8">
        <h2 className="text-xl font-bold mb-4">כרטיסיות</h2>
        <div className="card">
          <h3 className="text-lg font-semibold mb-2">כותרת כרטיס</h3>
          <p>תוכן הכרטיס. צבע הרקע, הצללה וגבולות מותאמים לפי העיצוב שלך.</p>
        </div>
      </section>

      {/* plus */}
<div className="w-full">
            <div className="flex bg-background" style={{height: "500px"}}>    
                <div className="flex items-center px-8 text-center md:w-1/2 md:px-12 lg:text-left"><div>        
                    <h2 className="text-3xl font-semibold text-text md:text-4xl">Design New <span className="text-accent">Components</span></h2>
                    <p className="mt-2 text-sm text-text/50 md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus sunt labore eveniet omnis eaque non harum, porro minus asperiores.</p>
                    <div className="mt-6 flex justify-center lg:justify-start">
                        <a className="rounded bg-primary/90 px-4 py-3 text-xs font-semibold text-background hover:bg-primary">Get Started</a>
                        <a className="mx-4 rounded bg-text/90 px-4 py-3 text-xs font-semibold text-background hover:bg-text">Learn More</a>
                    </div>      
                </div>    
            </div>    
            <div className="hidden w-1/2 md:block" style={{clipPath: "polygon(15% 0, 100% 0%, 100% 100%, 0 100%)"}}>      
                <div className="h-full bg-fixed object-cover blur" style={{backgroundImage: "url(https://source.unsplash.com/1800x1600/)"}}>
                        <div className="h-full bg-text opacity-50">
                        </div>
                    </div>    
                </div>
            </div>
        </div>

{/* and */}
<div className="relative">
    <div
        className="absolute -inset-2 rounded-lg bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-lime-600 via-cyan-600 to-fuchsia-600 opacity-50 blur-2xl"
    ></div>
    <div className="relative flex w-full h-64 items-center justify-center border border-zinc-700 rounded-lg bg-zinc-900 text-slate-300">
        Gradient shadow
    </div>
</div>

{/* or 1 */}
<div className="relative">
            <div
                className="absolute -inset-2 rounded-lg bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-600 via-violet-600 to-fuchsia-600 opacity-50 blur-2xl"
            ></div>
            <div className="relative flex w-full h-64 items-center justify-center border border-zinc-700 rounded-lg bg-zinc-900 text-slate-300">
                Gradient shadow
            </div>
</div>

{/* or 2 */}
<div className="relative">
    <div
        className="absolute -inset-2 rounded-lg bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-lime-600 via-gray-600 to-pink-600 opacity-50 blur-2xl"
    ></div>
    <div className="relative flex w-full h-64 items-center justify-center border border-zinc-700 rounded-lg bg-zinc-900 text-slate-300">
        Gradient shadow
    </div>
</div>







    </div>
  );
}

export default ExpertRegister;
