(()=>{"use strict";class t{constructor(t,e,n,o){this.title=t,this.description=e,this.dueDate=n,this.priority=o,this.finished=!1}}class e{constructor(t,e,n,o){this.title=t,this.description=e,this.dueDate=n,this.priority=o,this.todos=[]}}function n(t){const n=document.getElementsByClassName("form-input"),o=n[0].value,c=n[1].value,i=n[2].value,a=n[3].value,d=new e(o,c,i,a);null!=t&&(d.todos=t.todos),localStorage.setItem(o,JSON.stringify(d)),document.querySelector(".fluid-container").innerHTML="",window.location.reload()}function o(t){localStorage.removeItem(t),window.location.reload()}function c(e,i,a){const d=document.querySelector(".form");d&&d.remove();const l=document.querySelector(".fluid-container");null!=l&&(l.innerHTML=""),document.createElement("div").classList.add("new-form-container");const s=document.createElement("form");s.classList.add("form");const r=document.createElement("h3");r.textContent=e,r.classList.add("form-header"),s.appendChild(r),[{input:document.createElement("input"),label:"NAME"},{input:document.createElement("textarea"),label:"DESCRIPTION"},{input:document.createElement("input"),label:"DUE DATE"},{input:document.createElement("input"),label:"PRIORITY"}].forEach((t=>{t.input.classList.add("form-input");const e=document.createElement("label");e.textContent=t.label,s.appendChild(e),s.appendChild(t.input)}));const u=document.createElement("div");u.classList.add("form-buttons-container");const m=document.createElement("button");if(m.classList.add("form-button"),m.textContent="Confirm",m.setAttribute("type","button"),l.appendChild(s),"NEW PROJECT FORM"==e)m.addEventListener("click",(()=>n())),u.appendChild(m);else if("ADD NEW TODO"==e)r.textContent=r.textContent+` TO ${i.title.toUpperCase()}`,m.addEventListener("click",(()=>function(e){localStorage.removeItem(e.title);const n=document.getElementsByClassName("form-input"),o=n[0].value,c=n[1].value,i=n[2].value,a=n[3].value,d=new t(o,c,i,a);e.todos.push(d),localStorage.setItem(e.title,JSON.stringify(e)),document.querySelector(".fluid-container").innerHTML="",window.location.reload()}(i))),u.appendChild(m);else{const t=e.split(" ");if("EDITING"==t[0]){const e=document.getElementsByClassName("form-input"),d=e[0],l=e[1],s=e[2],r=e[3];d.value=i.title,l.value=i.description,s.value=i.dueDate,r.value=i.priority;const p=document.createElement("button");p.classList.add("form-button"),p.setAttribute("type","button");const E=document.createElement("button");E.classList.add("form-button"),E.setAttribute("type","button"),u.appendChild(m),u.appendChild(p),u.appendChild(E),"PROJECT"==t[1]?(m.addEventListener("click",(()=>function(t){localStorage.removeItem(t.title),n(t)}(i))),p.textContent="Delete project",p.addEventListener("click",(()=>o(i.title))),E.textContent="Manage Project's ToDos",E.addEventListener("click",(()=>function(t){const e=document.querySelector(".form");e&&e.remove();const n=document.querySelector(".fluid-container");null!=n&&(n.innerHTML=""),document.createElement("div").classList.add("manage-todos-form-form-container");const o=document.createElement("form");o.classList.add("form");const i=document.createElement("h3");if(i.classList.add("form-header"),i.textContent=`MANAGE TODOS FOR ${t.title.toUpperCase()}`,o.appendChild(i),null==t.todos||0===t.todos.length){const t=document.createElement("p");t.textContent="This project currently has no ToDos.",t.classList.add("no-todos"),o.appendChild(t)}else{const e=document.createElement("div");e.classList.add("todos-container"),t.todos.forEach((n=>{const o=document.createElement("button");o.textContent=n.title,n.finished&&(o.style.backgroundColor="green"),o.setAttribute("type","button"),o.addEventListener("click",(()=>function(t,e){c(`EDITING TODO ${t.title.toUpperCase()} FOR PROJECT ${e.title.toUpperCase()}`,t,e)}(n,t))),e.appendChild(o)})),o.appendChild(e)}const a=document.createElement("button");a.classList.add("form-button"),a.textContent="Add ToDo",a.addEventListener("click",(()=>c("ADD NEW TODO",t))),a.setAttribute("type","button"),o.appendChild(a),n.appendChild(o)}(i)))):"TODO"==t[1]&&(m.addEventListener("click",(()=>updateToDo(a,i))),p.textContent="Delete ToDo",p.addEventListener("click",(()=>function(t,e){const n=e.todos.filter((e=>e!=t));e.todos=n,o(e.title),localStorage.setItem(e.title,JSON.stringify(e)),window.location.reload()}(i,a))),E.textContent="Change status",E.addEventListener("click",(()=>changeToDoStatus(a,i))))}}s.appendChild(u)}const i=document.querySelector("main");!function(){const t=function(){let t=[],e=Object.keys(localStorage);return e.length,e.forEach((e=>{t.push(localStorage.getItem(e))})),t}();0==t.length?function(){const t=document.createElement("p");t.textContent="You currently have no projects. Try adding a new one right now!",i.appendChild(t)}():function(t){!function(t){const e=document.createElement("div");e.classList.add("projects-list-container"),i.appendChild(e),function(){const t=document.createElement("h2");t.textContent="YOUR PROJECTS",t.classList.add("projects-list-header"),document.querySelector(".projects-list-container").appendChild(t)}();const n=document.createElement("ul");n.classList.add("projects-list"),t.forEach((t=>{const e=JSON.parse(t),o=document.createElement("button");o.textContent=e.title,o.classList.add("projects-list-item"),o.addEventListener("click",(()=>function(t){c(`EDITING PROJECT ${t.title.toUpperCase()} `,t)}(e))),n.appendChild(o)})),e.appendChild(n)}(t)}(t),function(){const t=document.createElement("div");t.classList.add("buttons-container");const e=document.createElement("button");e.textContent="ADD PROJECT",e.classList.add("main-button"),e.addEventListener("click",(()=>c("NEW PROJECT FORM"))),t.appendChild(e),i.appendChild(t)}(),function(){const t=document.createElement("div");t.classList.add("fluid-container"),i.appendChild(t)}()}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWMsc0JBQzlEZ0IsRUFBaUJKLFlBQVkwRCxHQUM3Qm5CLEVBQUt2QyxZQUFZSSxHQVhqQnVELEdBYUcsV0FDSCxNQUFNbEUsRUFBaUIxQixTQUFTMkIsY0FBYyxPQUM5Q0QsRUFBZUUsVUFBVUMsSUFBSSxtQkFDN0IyQyxFQUFLdkMsWUFBWVAsR0FmakJtRSxHRWxFSkMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3ZhbmlsbGEtdG9kb3MvLi9zcmMvYXBwL21vZGVscy9tb2RlbHMtbW9kdWxlLmpzIiwid2VicGFjazovL3ZhbmlsbGEtdG9kb3MvLi9zcmMvYXBwL3Byb2plY3QvY3JlYXRlLW5ldy1wcm9qZWN0L2NyZWF0ZS1uZXctcHJvamVjdC5qcyIsIndlYnBhY2s6Ly92YW5pbGxhLXRvZG9zLy4vc3JjL2FwcC9wcm9qZWN0L3Byb2plY3QtZWRpdGlvbi13aW5kb3cvZGVsZXRlLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYS10b2Rvcy8uL3NyYy9hcHAvc2hhcmVkL2NyZWF0ZS1uZXctZm9ybS5qcyIsIndlYnBhY2s6Ly92YW5pbGxhLXRvZG9zLy4vc3JjL2FwcC90b2RvL2NyZWF0ZS10by1kby5qcyIsIndlYnBhY2s6Ly92YW5pbGxhLXRvZG9zLy4vc3JjL2FwcC9wcm9qZWN0L3Byb2plY3QtZWRpdGlvbi13aW5kb3cvdXBkYXRlLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYS10b2Rvcy8uL3NyYy9hcHAvdG9kby9tYW5hZ2UtdG9kb3MuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYS10b2Rvcy8uL3NyYy9hcHAvdG9kby9lZGl0LXRvZG8uanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYS10b2Rvcy8uL3NyYy9hcHAvdG9kby9kZWxldGUtdG8tZG8uanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYS10b2Rvcy8uL3NyYy9hcHAvc3RhcnQtdXAuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYS10b2Rvcy8uL3NyYy9hcHAvcHJvamVjdC9wcm9qZWN0LWVkaXRpb24td2luZG93L3Byb2plY3QtZWRpdGlvbi13aW5kb3cuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYS10b2Rvcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVG9Eb0NsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmZpbmlzaGVkID0gIGZhbHNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFByb2plY3RDbGFzcyB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy50b2RvcyA9IFtdO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0IHsgUHJvamVjdENsYXNzIH0gZnJvbSBcIi4uLy4uL21vZGVscy9tb2RlbHMtbW9kdWxlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KHByb2plY3QpIHtcblxuICAgIGNvbnN0IGZvcm1JbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JtLWlucHV0Jyk7XG4gICAgY29uc3QgbmV3UHJvamVjdFRpdGxlID0gZm9ybUlucHV0c1swXS52YWx1ZTtcbiAgICBjb25zdCBuZXdQcm9qZWN0RGVzY3JpcHRpb24gPSBmb3JtSW5wdXRzWzFdLnZhbHVlO1xuICAgIGNvbnN0IG5ld1Byb2plY3REdWVEYXRlID0gZm9ybUlucHV0c1syXS52YWx1ZTtcbiAgICBjb25zdCBuZXdQcm9qZWN0UHJpb3JpdHkgPSBmb3JtSW5wdXRzWzNdLnZhbHVlO1xuICBcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3RDbGFzcyhuZXdQcm9qZWN0VGl0bGUsIG5ld1Byb2plY3REZXNjcmlwdGlvbixuZXdQcm9qZWN0RHVlRGF0ZSwgbmV3UHJvamVjdFByaW9yaXR5KTtcblxuICAgIGlmIChwcm9qZWN0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgbmV3UHJvamVjdC50b2RvcyA9IHByb2plY3QudG9kb3M7XG4gICAgfVxuICBcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuZXdQcm9qZWN0VGl0bGUsIEpTT04uc3RyaW5naWZ5KG5ld1Byb2plY3QpKTtcbiAgXG4gICAgY29uc3QgZmx1aWRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmx1aWQtY29udGFpbmVyJyk7XG4gICAgZmx1aWRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xufSIsImV4cG9ydCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3RUaXRsZSkge1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShwcm9qZWN0VGl0bGUpO1xuICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG59IiwiaW1wb3J0IHtjcmVhdGVOZXdQcm9qZWN0fSBmcm9tICcuLi9wcm9qZWN0L2NyZWF0ZS1uZXctcHJvamVjdC9jcmVhdGUtbmV3LXByb2plY3QnO1xuaW1wb3J0IHtkZWxldGVQcm9qZWN0fSBmcm9tICcuLi9wcm9qZWN0L3Byb2plY3QtZWRpdGlvbi13aW5kb3cvZGVsZXRlLXByb2plY3QnO1xuaW1wb3J0IHt1cGRhdGVQcm9qZWN0fSBmcm9tICcuLi9wcm9qZWN0L3Byb2plY3QtZWRpdGlvbi13aW5kb3cvdXBkYXRlLXByb2plY3QnO1xuaW1wb3J0IHtvcGVuTWFuYWdlVG9kb3NXaW5kb3d9IGZyb20gJy4uL3RvZG8vbWFuYWdlLXRvZG9zJztcbmltcG9ydCB7IGNyZWF0ZVRvRG8gfSBmcm9tICcuLi90b2RvL2NyZWF0ZS10by1kbyc7XG5pbXBvcnQgeyBkZWxldGVUb0RvIH0gZnJvbSAnLi4vdG9kby9kZWxldGUtdG8tZG8nO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmV3Rm9ybShwc2V1ZG9FbnVtLCBwcm9qZWN0LCB0b2RvKSB7XG4gICAgXG4gICAgY29uc3QgZXhpc3RpbmdGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKTtcblxuICAgIGlmIChleGlzdGluZ0Zvcm0pIHtcbiAgICAgICAgZXhpc3RpbmdGb3JtLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGZsdWlkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZsdWlkLWNvbnRhaW5lcicpO1xuICAgIGlmIChmbHVpZENvbnRhaW5lciAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgZmx1aWRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmV3LWZvcm0tY29udGFpbmVyJyk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2Zvcm0nKTtcbiAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaDMudGV4dENvbnRlbnQgPSBwc2V1ZG9FbnVtO1xuICAgIGgzLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taGVhZGVyJyk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChoMyk7XG4gICAgY29uc3QgdGl0bGVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25GaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgY29uc3QgZHVlRGF0ZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBwcmlvcml0eUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgIGNvbnN0IGlucHV0cyA9IFtcbiAgICAgICAge2lucHV0OiB0aXRsZUZpZWxkLCBsYWJlbDogXCJOQU1FXCJ9LFxuICAgICAgICB7aW5wdXQ6IGRlc2NyaXB0aW9uRmllbGQsIGxhYmVsOiBcIkRFU0NSSVBUSU9OXCJ9LFxuICAgICAgICB7aW5wdXQ6IGR1ZURhdGVGaWVsZCwgbGFiZWw6IFwiRFVFIERBVEVcIn0sXG4gICAgICAgIHtpbnB1dDogcHJpb3JpdHlGaWVsZCwgbGFiZWw6IFwiUFJJT1JJVFlcIn1dO1xuXG4gICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICBpbnB1dC5pbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBpbnB1dC5sYWJlbDtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQuaW5wdXQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1idXR0b25zLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgcHJpbWFyeUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByaW1hcnlCdXR0b24uY2xhc3NMaXN0LmFkZCgnZm9ybS1idXR0b24nKTtcbiAgICBwcmltYXJ5QnV0dG9uLnRleHRDb250ZW50ID0gXCJDb25maXJtXCI7XG4gICAgcHJpbWFyeUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG5cbiAgICBmbHVpZENvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcblxuXG4gICAgaWYgKHBzZXVkb0VudW0gPT0gXCJORVcgUFJPSkVDVCBGT1JNXCIpIHtcbiAgICAgICAgcHJpbWFyeUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4gY3JlYXRlTmV3UHJvamVjdCgpKTtcbiAgICAgICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcmltYXJ5QnV0dG9uKTtcbiAgICB9IGVsc2UgaWYgKHBzZXVkb0VudW0gPT0gXCJBREQgTkVXIFRPRE9cIikge1xuICAgICAgICBoMy50ZXh0Q29udGVudCA9IGgzLnRleHRDb250ZW50ICsgYCBUTyAke3Byb2plY3QudGl0bGUudG9VcHBlckNhc2UoKX1gO1xuICAgICAgICBwcmltYXJ5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiBjcmVhdGVUb0RvKHByb2plY3QpKTtcbiAgICAgICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcmltYXJ5QnV0dG9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzcGxpdCA9IHBzZXVkb0VudW0uc3BsaXQoJyAnKTtcbiAgICAgICAgaWYgKHNwbGl0WzBdID09IFwiRURJVElOR1wiKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGZvcm1JbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JtLWlucHV0Jyk7XG4gICAgICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZm9ybUlucHV0c1swXTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBmb3JtSW5wdXRzWzFdO1xuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZm9ybUlucHV0c1syXTtcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBmb3JtSW5wdXRzWzNdO1xuXG4gICAgICAgICAgICB0aXRsZUlucHV0LnZhbHVlID0gcHJvamVjdC50aXRsZTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBwcm9qZWN0LmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgZHVlRGF0ZUlucHV0LnZhbHVlID0gcHJvamVjdC5kdWVEYXRlO1xuICAgICAgICAgICAgcHJpb3JpdHlJbnB1dC52YWx1ZSA9IHByb2plY3QucHJpb3JpdHk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmb3JtLWJ1dHRvbicpO1xuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcblxuICAgICAgICAgICAgY29uc3QgbWFuYWdlVG9kb3NCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIG1hbmFnZVRvZG9zQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnV0dG9uJyk7XG4gICAgICAgICAgICBtYW5hZ2VUb2Rvc0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG5cbiAgICAgICAgICAgIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpbWFyeUJ1dHRvbik7XG4gICAgICAgICAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgICAgICAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKG1hbmFnZVRvZG9zQnV0dG9uKTtcblxuICAgICAgICAgICAgaWYgKHNwbGl0WzFdID09IFwiUFJPSkVDVFwiKSB7XG4gICAgICAgICAgICAgICAgcHJpbWFyeUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4gdXBkYXRlUHJvamVjdChwcm9qZWN0KSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSBwcm9qZWN0JztcbiAgICAgICAgICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IGRlbGV0ZVByb2plY3QocHJvamVjdC50aXRsZSkpO1xuICAgICAgICAgICAgICAgIG1hbmFnZVRvZG9zQnV0dG9uLnRleHRDb250ZW50ID0gXCJNYW5hZ2UgUHJvamVjdCdzIFRvRG9zXCI7XG4gICAgICAgICAgICAgICAgbWFuYWdlVG9kb3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBvcGVuTWFuYWdlVG9kb3NXaW5kb3cocHJvamVjdCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzcGxpdFsxXSA9PSBcIlRPRE9cIikge1xuICAgICAgICAgICAgICAgIHByaW1hcnlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHVwZGF0ZVRvRG8odG9kbywgcHJvamVjdCkpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUgVG9Ebyc7XG4gICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiBkZWxldGVUb0RvKHByb2plY3QsIHRvZG8pKTtcbiAgICAgICAgICAgICAgICBtYW5hZ2VUb2Rvc0J1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2hhbmdlIHN0YXR1c1wiO1xuICAgICAgICAgICAgICAgIG1hbmFnZVRvZG9zQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2hhbmdlVG9Eb1N0YXR1cyh0b2RvLCBwcm9qZWN0KSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgfVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uc0NvbnRhaW5lcik7XG5cbn0iLCJpbXBvcnQgeyBUb0RvQ2xhc3MgfSBmcm9tIFwiLi4vbW9kZWxzL21vZGVscy1tb2R1bGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvRG8ocHJvamVjdCkge1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShwcm9qZWN0LnRpdGxlKTtcblxuICBjb25zdCBmb3JtSW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm9ybS1pbnB1dCcpO1xuICBjb25zdCBuZXdUb0RvVGl0bGUgPSBmb3JtSW5wdXRzWzBdLnZhbHVlO1xuICBjb25zdCBuZXdUb0RvRGVzY3JpcHRpb24gPSBmb3JtSW5wdXRzWzFdLnZhbHVlO1xuICBjb25zdCBuZXdUb0RvRHVlRGF0ZSA9IGZvcm1JbnB1dHNbMl0udmFsdWU7XG4gIGNvbnN0IG5ld1RvRG9Qcmlvcml0eSA9IGZvcm1JbnB1dHNbM10udmFsdWU7XG5cbiAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb0RvQ2xhc3MobmV3VG9Eb1RpdGxlLCBuZXdUb0RvRGVzY3JpcHRpb24sIG5ld1RvRG9EdWVEYXRlLCBuZXdUb0RvUHJpb3JpdHkpO1xuICBwcm9qZWN0LnRvZG9zLnB1c2gobmV3VG9kbyk7XG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdC50aXRsZSwgSlNPTi5zdHJpbmdpZnkocHJvamVjdCkpO1xuXG4gIGNvbnN0IGZsdWlkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZsdWlkLWNvbnRhaW5lcicpO1xuICBmbHVpZENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xufSIsImltcG9ydCB7IGNyZWF0ZU5ld1Byb2plY3QgfSBmcm9tIFwiLi4vY3JlYXRlLW5ldy1wcm9qZWN0L2NyZWF0ZS1uZXctcHJvamVjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUHJvamVjdChwcm9qZWN0KSB7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHByb2plY3QudGl0bGUpO1xuICBjcmVhdGVOZXdQcm9qZWN0KHByb2plY3QpO1xufSIsImltcG9ydCB7IGNyZWF0ZU5ld0Zvcm0gfSBmcm9tIFwiLi4vc2hhcmVkL2NyZWF0ZS1uZXctZm9ybVwiO1xuaW1wb3J0IHsgb3BlbkVkaXRUb0RvV2luZG93IH0gZnJvbSBcIi4vZWRpdC10b2RvXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvcGVuTWFuYWdlVG9kb3NXaW5kb3cocHJvamVjdCkge1xuXG4gIGNvbnN0IGV4aXN0aW5nRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XG5cbiAgaWYgKGV4aXN0aW5nRm9ybSkge1xuICAgICAgZXhpc3RpbmdGb3JtLnJlbW92ZSgpO1xuICB9XG5cbiAgY29uc3QgZmx1aWRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmx1aWQtY29udGFpbmVyJyk7XG4gIGlmIChmbHVpZENvbnRhaW5lciAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGZsdWlkQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21hbmFnZS10b2Rvcy1mb3JtLWZvcm0tY29udGFpbmVyJyk7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGZvcm0uY2xhc3NMaXN0LmFkZCgnZm9ybScpO1xuICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGgzLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taGVhZGVyJyk7XG4gIGgzLnRleHRDb250ZW50ID0gYE1BTkFHRSBUT0RPUyBGT1IgJHtwcm9qZWN0LnRpdGxlLnRvVXBwZXJDYXNlKCl9YDtcbiAgZm9ybS5hcHBlbmRDaGlsZChoMyk7XG5cblxuICBpZiAocHJvamVjdC50b2RvcyA9PSB1bmRlZmluZWQgfHwgcHJvamVjdC50b2Rvcy5sZW5ndGggPT09IDApIHtcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAudGV4dENvbnRlbnQgPSAnVGhpcyBwcm9qZWN0IGN1cnJlbnRseSBoYXMgbm8gVG9Eb3MuJztcbiAgICBwLmNsYXNzTGlzdC5hZGQoJ25vLXRvZG9zJyk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0b2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG9zLWNvbnRhaW5lcicpXG4gICAgcHJvamVjdC50b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBidXR0b24udGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgICAgaWYgKHRvZG8uZmluaXNoZWQpIHtcbiAgICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgIH1cbiAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG9wZW5FZGl0VG9Eb1dpbmRvdyh0b2RvLCBwcm9qZWN0KSlcbiAgICAgIHRvZG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgfSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0b2Rvc0NvbnRhaW5lcik7XG4gIH1cbiAgY29uc3QgY3JlYXRlVG9Eb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjcmVhdGVUb0RvQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnV0dG9uJyk7XG4gIGNyZWF0ZVRvRG9CdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFRvRG8nO1xuICBjcmVhdGVUb0RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY3JlYXRlTmV3Rm9ybShcIkFERCBORVcgVE9ET1wiLCBwcm9qZWN0KSk7XG4gIGNyZWF0ZVRvRG9CdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlVG9Eb0J1dHRvbik7XG5cbiAgZmx1aWRDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSlcbn0iLCJpbXBvcnQgeyBjcmVhdGVOZXdGb3JtIH0gZnJvbSBcIi4uL3NoYXJlZC9jcmVhdGUtbmV3LWZvcm1cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5FZGl0VG9Eb1dpbmRvdyh0b2RvLCBwcm9qZWN0KSB7XG4gIGNvbnN0IHBzZXVkb0VudW0gPSBgRURJVElORyBUT0RPICR7KHRvZG8udGl0bGUpLnRvVXBwZXJDYXNlKCl9IEZPUiBQUk9KRUNUICR7cHJvamVjdC50aXRsZS50b1VwcGVyQ2FzZSgpfWA7XG4gIGNyZWF0ZU5ld0Zvcm0ocHNldWRvRW51bSwgdG9kbywgcHJvamVjdCk7XG59IiwiaW1wb3J0IHsgZGVsZXRlUHJvamVjdCB9IGZyb20gXCIuLi9wcm9qZWN0L3Byb2plY3QtZWRpdGlvbi13aW5kb3cvZGVsZXRlLXByb2plY3RcIlxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVG9Ebyh0b2RvLCBwcm9qZWN0KSB7XG4gIGNvbnN0IGZpbHRlcmVkID0gcHJvamVjdC50b2Rvcy5maWx0ZXIodG9kb0l0ZW0gPT4gdG9kb0l0ZW0gIT0gdG9kbyk7XG4gIHByb2plY3QudG9kb3MgPSBmaWx0ZXJlZDtcbiAgZGVsZXRlUHJvamVjdChwcm9qZWN0LnRpdGxlKTtcblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0LnRpdGxlLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0KSk7XG4gIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbn0iLCIvLyBDT1JFO1xuZXhwb3J0IGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5pbXBvcnQge2NyZWF0ZU5ld0Zvcm19IGZyb20gJy4vc2hhcmVkL2NyZWF0ZS1uZXctZm9ybSc7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0RWRpdGlvbldpbmRvdyB9IGZyb20gJy4vcHJvamVjdC9wcm9qZWN0LWVkaXRpb24td2luZG93L3Byb2plY3QtZWRpdGlvbi13aW5kb3cnO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRVcCAoKSB7XG4gICAgY29uc3QgcHJvamVjdHNGcm9tU3RvcmFnZSA9IGdldFByb2plY3RzRnJvbVN0b3JhZ2UoKTtcbiAgICBcbiAgICBpZiAocHJvamVjdHNGcm9tU3RvcmFnZS5sZW5ndGggPT0gMCkge1xuICAgICAgICBhcHBlbmROb1RvZG9zTWVzc2FnZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY3JlYXRlTWFpbkNvbnRlbnQocHJvamVjdHNGcm9tU3RvcmFnZSk7XG4gICAgfTtcbiAgICBwcmVwYXJlTmVjZXNzYXJ5RWxlbWVudHMoKSBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3RzRnJvbVN0b3JhZ2UoKSB7XG4gICAgbGV0IHZhbHVlcyA9IFtdLFxuICAgIGtleXMgPSBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLFxuICAgIGkgPSBrZXlzLmxlbmd0aDtcbiAgICBrZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgdmFsdWVzLnB1c2gobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSlcbiAgICB9KTtcbiAgICByZXR1cm4gdmFsdWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kTm9Ub2Rvc01lc3NhZ2UoKSB7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwLnRleHRDb250ZW50ID0gXCJZb3UgY3VycmVudGx5IGhhdmUgbm8gcHJvamVjdHMuIFRyeSBhZGRpbmcgYSBuZXcgb25lIHJpZ2h0IG5vdyFcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKHApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWFpbkNvbnRlbnQocHJvamVjdHNGcm9tU3RvcmFnZSkge1xuICAgIGNyZWF0ZVByb2plY3RzTGlzdChwcm9qZWN0c0Zyb21TdG9yYWdlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMaXN0SGVhZGVyKCkge1xuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoMi50ZXh0Q29udGVudCA9IFwiWU9VUiBQUk9KRUNUU1wiO1xuICAgIGgyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzLWxpc3QtaGVhZGVyJyk7XG4gICAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1saXN0LWNvbnRhaW5lcicpICAgICBcbiAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGgyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RzTGlzdChwcm9qZWN0c0Zyb21TdG9yYWdlKSB7XG4gICAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMtbGlzdC1jb250YWluZXInKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGxpc3RDb250YWluZXIpO1xuICAgIGNyZWF0ZUxpc3RIZWFkZXIoKTtcblxuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICB1bC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cy1saXN0JylcbiAgICBwcm9qZWN0c0Zyb21TdG9yYWdlLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RGcm9tU3RvcmFnZSA9IEpTT04ucGFyc2UocHJvamVjdCk7XG4gICAgICAgIGNvbnN0IHByb2plY3RMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBwcm9qZWN0TGlzdEl0ZW0udGV4dENvbnRlbnQgPSBwcm9qZWN0RnJvbVN0b3JhZ2UudGl0bGU7XG4gICAgICAgIHByb2plY3RMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cy1saXN0LWl0ZW0nKTtcbiAgICAgICAgcHJvamVjdExpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY3JlYXRlUHJvamVjdEVkaXRpb25XaW5kb3cocHJvamVjdEZyb21TdG9yYWdlKSk7XG4gICAgICAgIHVsLmFwcGVuZENoaWxkKHByb2plY3RMaXN0SXRlbSk7XG4gICAgfSk7XG5cbiAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHVsKTtcbn1cblxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXBhcmVOZWNlc3NhcnlFbGVtZW50cygpIHtcbiAgICBjcmVhdGVCdXR0b25zQ29udGFpbmVyKCk7XG4gICAgY3JlYXRlRmx1aWRDb250YWluZXIoKVxufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbnNDb250YWluZXIoKSB7XG4gICAgY29uc3QgYnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9ucy1jb250YWluZXInKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQUREIFBST0pFQ1RcIjtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21haW4tYnV0dG9uJyk7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKSA9PiBjcmVhdGVOZXdGb3JtKFwiTkVXIFBST0pFQ1QgRk9STVwiKSk7XG4gICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGJ1dHRvbnNDb250YWluZXIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZsdWlkQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IGZsdWlkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZmx1aWRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmx1aWQtY29udGFpbmVyJyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChmbHVpZENvbnRhaW5lcik7XG59XG5cblxuXG5cblxuXG5cblxuIiwiaW1wb3J0IHtjcmVhdGVOZXdGb3JtfSBmcm9tICcuLi8uLi9zaGFyZWQvY3JlYXRlLW5ldy1mb3JtJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RFZGl0aW9uV2luZG93KHByb2plY3Qpe1xuXG4gIGNvbnN0IHBzZXVkb0VudW0gPSBgRURJVElORyBQUk9KRUNUICR7KHByb2plY3QudGl0bGUpLnRvVXBwZXJDYXNlKCl9IGA7XG4gIGNyZWF0ZU5ld0Zvcm0ocHNldWRvRW51bSwgcHJvamVjdCk7XG5cbn1cbiIsImltcG9ydCB7IHN0YXJ0VXAgfSBmcm9tIFwiLi9hcHAvc3RhcnQtdXBcIjtcblxuc3RhcnRVcCgpOyJdLCJuYW1lcyI6WyJUb0RvQ2xhc3MiLCJjb25zdHJ1Y3RvciIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJ0aGlzIiwiZmluaXNoZWQiLCJQcm9qZWN0Q2xhc3MiLCJ0b2RvcyIsImNyZWF0ZU5ld1Byb2plY3QiLCJwcm9qZWN0IiwiZm9ybUlucHV0cyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm5ld1Byb2plY3RUaXRsZSIsInZhbHVlIiwibmV3UHJvamVjdERlc2NyaXB0aW9uIiwibmV3UHJvamVjdER1ZURhdGUiLCJuZXdQcm9qZWN0UHJpb3JpdHkiLCJuZXdQcm9qZWN0IiwidW5kZWZpbmVkIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJkZWxldGVQcm9qZWN0IiwicHJvamVjdFRpdGxlIiwicmVtb3ZlSXRlbSIsImNyZWF0ZU5ld0Zvcm0iLCJwc2V1ZG9FbnVtIiwidG9kbyIsImV4aXN0aW5nRm9ybSIsInJlbW92ZSIsImZsdWlkQ29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImZvcm0iLCJoMyIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJpbnB1dCIsImxhYmVsIiwiZm9yRWFjaCIsImJ1dHRvbnNDb250YWluZXIiLCJwcmltYXJ5QnV0dG9uIiwic2V0QXR0cmlidXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvVXBwZXJDYXNlIiwibmV3VG9Eb1RpdGxlIiwibmV3VG9Eb0Rlc2NyaXB0aW9uIiwibmV3VG9Eb0R1ZURhdGUiLCJuZXdUb0RvUHJpb3JpdHkiLCJuZXdUb2RvIiwicHVzaCIsImNyZWF0ZVRvRG8iLCJzcGxpdCIsInRpdGxlSW5wdXQiLCJkZXNjcmlwdGlvbklucHV0IiwiZHVlRGF0ZUlucHV0IiwicHJpb3JpdHlJbnB1dCIsImRlbGV0ZUJ1dHRvbiIsIm1hbmFnZVRvZG9zQnV0dG9uIiwidXBkYXRlUHJvamVjdCIsImxlbmd0aCIsInAiLCJ0b2Rvc0NvbnRhaW5lciIsImJ1dHRvbiIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwib3BlbkVkaXRUb0RvV2luZG93IiwiY3JlYXRlVG9Eb0J1dHRvbiIsIm9wZW5NYW5hZ2VUb2Rvc1dpbmRvdyIsInVwZGF0ZVRvRG8iLCJmaWx0ZXJlZCIsImZpbHRlciIsInRvZG9JdGVtIiwiZGVsZXRlVG9EbyIsImNoYW5nZVRvRG9TdGF0dXMiLCJtYWluIiwicHJvamVjdHNGcm9tU3RvcmFnZSIsInZhbHVlcyIsImtleXMiLCJPYmplY3QiLCJrZXkiLCJnZXRJdGVtIiwiZ2V0UHJvamVjdHNGcm9tU3RvcmFnZSIsImFwcGVuZE5vVG9kb3NNZXNzYWdlIiwibGlzdENvbnRhaW5lciIsImgyIiwiY3JlYXRlTGlzdEhlYWRlciIsInVsIiwicHJvamVjdEZyb21TdG9yYWdlIiwicGFyc2UiLCJwcm9qZWN0TGlzdEl0ZW0iLCJjcmVhdGVQcm9qZWN0RWRpdGlvbldpbmRvdyIsImNyZWF0ZVByb2plY3RzTGlzdCIsImNyZWF0ZU1haW5Db250ZW50IiwiYWRkUHJvamVjdEJ1dHRvbiIsImNyZWF0ZUJ1dHRvbnNDb250YWluZXIiLCJjcmVhdGVGbHVpZENvbnRhaW5lciIsInN0YXJ0VXAiXSwic291cmNlUm9vdCI6IiJ9