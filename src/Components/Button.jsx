import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}

// import React from "react";

// export default function Button({
//     children,
//     type = "button",
//     bgColor = "bg-blue-600",
//     textColor = "text-white",
//     className = "",
//     onClick, // Add onClick prop
//     ...props
// }) {
//     return (
//         <button
//             className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
//             type={type}
//             onClick={onClick} // Add onClick event handler
//             {...props}
//         >
//             {children}
//         </button>
//     );
// }
