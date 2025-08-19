import React from "react";
import { motion } from "framer-motion";


export default function AnimatedReveal({ children, className = "" }) {
return (
<motion.div
className={className}
initial={{ opacity: 0, y: 12 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.2 }}
transition={{ duration: 0.4, ease: "easeOut" }}
>
{children}
</motion.div>
);
}