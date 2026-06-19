import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { C as Cloud, D as ArrowUp, E as Award, S as CodeXml, T as Brain, _ as FolderGit2, a as Star, b as Database, c as Rocket, d as Linkedin, f as GraduationCap, g as GitBranch, h as GitFork, i as Trophy, l as Menu, m as Github, n as Wrench, o as Sparkles, p as Globe, r as Users, s as Send, t as X, u as Mail, v as ExternalLink, w as Check, x as Code, y as Download } from "../_libs/lucide-react.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-jR-y64Q5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var links = [
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#skills",
		label: "Skills"
	},
	{
		href: "#projects",
		label: "Projects"
	},
	{
		href: "#achievements",
		label: "Achievements"
	},
	{
		href: "#education",
		label: "Education"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: `glass flex items-center justify-between rounded-2xl px-4 py-3 transition-all ${scrolled ? "glass-strong" : ""}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#home",
						className: "flex items-center gap-2 font-display text-lg font-bold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand-blue via-brand-purple to-brand-cyan text-background",
							children: "MJ"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline gradient-text",
							children: "Mitali Jadhav"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "hidden md:flex items-center gap-1",
						children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							className: "rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground",
							children: l.label
						}) }, l.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contact",
						className: "hidden md:inline-flex items-center rounded-lg bg-gradient-to-r from-brand-blue to-brand-purple px-4 py-2 text-sm font-medium text-background transition-transform hover:scale-105",
						children: "Hire Me"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Toggle menu",
						onClick: () => setOpen((o) => !o),
						className: "md:hidden grid h-9 w-9 place-items-center rounded-lg bg-white/5",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 18 })
					})
				]
			}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "glass mt-2 rounded-2xl p-2 md:hidden animate-fade-in",
				children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.href,
					onClick: () => setOpen(false),
					className: "block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground",
					children: l.label
				}, l.href))
			})]
		})
	});
}
var mitali_portrait_default = "/assets/mitali-portrait-BBRvCdY3.jpeg";
var roles = [
	"AI/ML Engineer",
	"Full-Stack Developer",
	"Open Source Contributor",
	"CSE Student"
];
function useTyping(words, speed = 80, pause = 1400) {
	const [text, setText] = (0, import_react.useState)("");
	const [i, setI] = (0, import_react.useState)(0);
	const [del, setDel] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const word = words[i % words.length];
		const t = setTimeout(() => {
			if (!del) {
				const next = word.slice(0, text.length + 1);
				setText(next);
				if (next === word) setTimeout(() => setDel(true), pause);
			} else {
				const next = word.slice(0, text.length - 1);
				setText(next);
				if (next === "") {
					setDel(false);
					setI((v) => v + 1);
				}
			}
		}, del ? speed / 2 : speed);
		return () => clearTimeout(t);
	}, [
		text,
		del,
		i,
		words,
		speed,
		pause
	]);
	return text;
}
function Hero() {
	const typed = useTyping(roles);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none absolute inset-0 -z-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-20 -left-20 h-72 w-72 rounded-full bg-brand-purple/30 blur-3xl animate-blob" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-40 -right-10 h-80 w-80 rounded-full bg-brand-blue/30 blur-3xl animate-blob [animation-delay:-4s]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-brand-cyan/20 blur-3xl animate-blob [animation-delay:-8s]" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-[1.2fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
							size: 14,
							className: "text-brand-cyan"
						}), "Available for internships & collaborations"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl",
						children: ["Hi, I'm ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "gradient-text",
							children: "Mitali Jadhav"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-lg text-muted-foreground sm:text-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground/90",
							children: "I'm a "
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "cursor-blink font-mono text-brand-cyan",
							children: typed
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-base text-muted-foreground sm:text-lg",
						children: "Building intelligent solutions for agriculture, sustainability, and real-world impact."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#projects",
								className: "inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan px-5 py-3 text-sm font-semibold text-background transition-transform hover:scale-105 glow",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderGit2, { size: 16 }), " View Projects"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://drive.google.com/file/d/1qGd6DBTZPjy-cheSDKLhtQFEnXS8vuG5/view?usp=sharing",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center gap-2 rounded-xl glass-strong px-5 py-3 text-sm font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { size: 16 }), "Download Resume"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#contact",
								className: "inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-muted-foreground hover:text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 16 }), " Contact Me"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex items-center gap-3 text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								"aria-label": "GitHub",
								href: "https://github.com/itsmitalijadhav06-beep",
								target: "_blank",
								rel: "noreferrer",
								className: "grid h-10 w-10 place-items-center rounded-xl glass hover:text-brand-cyan hover-lift",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { size: 18 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								"aria-label": "LinkedIn",
								href: "https://www.linkedin.com/in/mitali-jadhav-04549a331",
								target: "_blank",
								rel: "noreferrer",
								className: "grid h-10 w-10 place-items-center rounded-xl glass hover:text-brand-cyan hover-lift",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { size: 18 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								"aria-label": "Email",
								href: "mailto:its.mitalijadhav06@gmail.com",
								className: "grid h-10 w-10 place-items-center rounded-xl glass hover:text-brand-cyan hover-lift",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 18 })
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-full max-w-sm lg:max-w-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-blue via-brand-purple to-brand-cyan opacity-40 blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative glass-strong rounded-[2rem] p-3 animate-float",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: mitali_portrait_default,
						alt: "Mitali Jadhav portrait",
						width: 768,
						height: 768,
						className: "aspect-square w-full rounded-[1.5rem] object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute -bottom-4 -right-4 rounded-2xl glass-strong px-4 py-3 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono text-brand-cyan",
							children: `<dev/>`
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-semibold",
							children: "Open to Work"
						})]
					})]
				})]
			})]
		})]
	});
}
var stats = [
	{
		icon: CodeXml,
		label: "Projects Built",
		value: 5,
		suffix: "+"
	},
	{
		icon: Github,
		label: "Open Source",
		value: 10,
		suffix: "+"
	},
	{
		icon: Award,
		label: "Hackathons",
		value: 8,
		suffix: "+"
	},
	{
		icon: Rocket,
		label: "CGPA",
		value: 8.3,
		suffix: ""
	}
];
function useCount(target, run, duration = 1400) {
	const [n, setN] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!run) return;
		let raf = 0;
		const start = performance.now();
		const isFloat = !Number.isInteger(target);
		const tick = (t) => {
			const p = Math.min(1, (t - start) / duration);
			const eased = 1 - Math.pow(1 - p, 3);
			setN(isFloat ? +(target * eased).toFixed(1) : Math.round(target * eased));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [
		target,
		run,
		duration
	]);
	return n;
}
function Stats() {
	const ref = (0, import_react.useRef)(null);
	const [run, setRun] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([e]) => e.isIntersecting && setRun(true), { threshold: .3 });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref,
		className: "mx-auto max-w-6xl px-4 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "glass-strong grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/5 md:grid-cols-4",
			children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
				...s,
				run
			}, s.label))
		})
	});
}
function StatCard({ icon: Icon, label, value, suffix, run }) {
	const n = useCount(value, run);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center gap-2 bg-background/40 p-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				size: 22,
				className: "text-brand-cyan"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "font-display text-3xl font-bold gradient-text sm:text-4xl",
				children: [n, suffix]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs uppercase tracking-wider text-muted-foreground",
				children: label
			})
		]
	});
}
function Section({ id, eyebrow, title, description, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id,
		className: "mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-10 max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-mono uppercase tracking-wider text-brand-cyan",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-brand-cyan" }), eyebrow]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-bold sm:text-4xl md:text-5xl",
					children: title
				}),
				description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base text-muted-foreground sm:text-lg",
					children: description
				})
			]
		}), children]
	});
}
var highlights = [
	{
		icon: Brain,
		title: "AI & Machine Learning",
		text: "Deep learning, CV and applied ML."
	},
	{
		icon: Code,
		title: "Full-Stack Development",
		text: "React, FastAPI and modern stacks."
	},
	{
		icon: Sparkles,
		title: "Open Source",
		text: "Active contributor in GSSoC and more."
	},
	{
		icon: Users,
		title: "Social Impact",
		text: "Tech that solves real-world problems."
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "about",
		eyebrow: "About Me",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Engineering ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "gradient-text",
				children: "Solutions"
			}),
			" with AI, Data, and Modern Web Technologies."
		] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 lg:grid-cols-[1.2fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass-strong rounded-3xl p-6 sm:p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-base leading-relaxed text-muted-foreground sm:text-lg",
					children: "I am a Computer Science Engineering student passionate about Artificial Intelligence, Machine Learning, Full-Stack Development, and Open Source. I enjoy building real-world solutions that create social impact and solve practical problems through technology."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg",
					children: "From training computer vision models that help farmers, to building wellness apps and smart energy systems — I love shipping projects that matter."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-3",
				children: highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rounded-2xl p-4 hover-lift",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(h.icon, {
							size: 20,
							className: "text-brand-cyan"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 text-sm font-semibold",
							children: h.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: h.text
						})
					]
				}, h.title))
			})]
		})
	});
}
var groups = [
	{
		icon: CodeXml,
		title: "Languages",
		items: [
			"Java",
			"Python",
			"C++",
			"SQL",
			"JavaScript",
			"TypeScript"
		]
	},
	{
		icon: Globe,
		title: "Web Development",
		items: [
			"React",
			"FastAPI",
			"Node.js",
			"Express.js",
			"HTML",
			"CSS",
			"Tailwind CSS",
			"REST APIs",
			"JWT Authentication"
		]
	},
	{
		icon: Database,
		title: "Database",
		items: [
			"MongoDB",
			"MySQL",
			"PostgreSQL",
			"JDBC"
		]
	},
	{
		icon: Brain,
		title: "AI / ML",
		items: [
			"TensorFlow",
			"Machine Learning",
			"Deep Learning",
			"Computer Vision",
			"Transfer Learning",
			"CNNs",
			"Image Classification"
		]
	},
	{
		icon: Cloud,
		title: "Cloud & Deployment",
		items: [
			"Vercel",
			"Render",
			"Hugging Face",
			"GitHub"
		]
	},
	{
		icon: Wrench,
		title: "Tools",
		items: [
			"Git",
			"GitHub",
			"VS Code",
			"Postman",
			"Jupyter Notebook",
			"Maven"
		]
	}
];
function Skills() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "skills",
		eyebrow: "Skills",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"My ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "gradient-text",
				children: "technical"
			}),
			" toolkit"
		] }),
		description: "A blend of AI, full-stack, and developer tooling I use to ship production-grade work.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
			children: groups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass rounded-3xl p-6 hover-lift",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-purple text-background",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(g.icon, { size: 18 })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg font-bold",
						children: g.title
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: g.items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-foreground/90 transition-colors hover:border-brand-cyan/50 hover:text-brand-cyan",
						children: i
					}, i))
				})]
			}, g.title))
		})
	});
}
var projects = [
	{
		title: "PestGuard AI",
		description: "An AI-powered rice pest detection and monitoring platform that uses deep learning to identify pests from crop images, assess risk levels, provide recommendations, and visualize analytics through interactive dashboards.",
		features: [
			"Rice pest image classification",
			"Risk assessment (Low / Medium / High)",
			"Real-time monitoring dashboard",
			"Analytics and trend visualization",
			"Image upload and prediction",
			"Farmer-friendly recommendations"
		],
		tech: [
			"TensorFlow",
			"FastAPI",
			"React",
			"TypeScript",
			"MongoDB",
			"Tailwind CSS"
		],
		category: "AI/ML",
		accent: "from-emerald-400/30 to-brand-cyan/30",
		github: "https://github.com/itsmitalijadhav06-beep/pest-detection",
		demo: "https://pest-detection-liard.vercel.app/",
		status: "Deployed",
		featured: true
	},
	{
		title: "Smart Energy Monitoring System",
		description: "System for monitoring and analyzing energy consumption to improve efficiency and reduce wastage across homes and facilities.",
		tech: ["Java", "Data Structures"],
		category: "Systems",
		accent: "from-amber-400/30 to-brand-purple/30",
		github: "https://github.com/itsmitalijadhav06-beep/Smart-Energy-Monitoring-System"
	},
	{
		title: "Farmer Transport System",
		description: "Agricultural logistics platform connecting farmers with transportation resources for efficient crop movement and supply-chain coordination.",
		tech: ["Python"],
		category: "Systems",
		accent: "from-brand-cyan/30 to-brand-blue/30",
		github: "https://github.com/itsmitalijadhav06-beep/Farmer-Transport-System"
	},
	{
		title: "MindEase — Stress Management",
		description: "Stress assessment and wellness platform that provides personalized recommendations, journaling, and stress-relief activities for students.",
		tech: [
			"Java",
			"JDBC",
			"SQL",
			"HTML",
			"CSS"
		],
		category: "Web",
		accent: "from-brand-purple/30 to-pink-400/30",
		github: "https://github.com/itsmitalijadhav06-beep/StressManagement"
	},
	{
		title: "EcoBright — E-Waste Management",
		description: "Smart e-waste management platform promoting responsible recycling and helping users locate nearby disposal facilities.",
		tech: [
			"React",
			"Node.js",
			"MongoDB"
		],
		category: "Web",
		accent: "from-brand-blue/30 to-emerald-400/30",
		github: "https://github.com/itsmitalijadhav06-beep/E-WasteManagement"
	}
];
var filters = [
	"All",
	"AI/ML",
	"Web",
	"Systems"
];
function Projects() {
	const [active, setActive] = (0, import_react.useState)("All");
	const visible = active === "All" ? projects : projects.filter((p) => p.category === active);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "projects",
		eyebrow: "Projects",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Selected ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "gradient-text",
			children: "work"
		})] }),
		description: "A mix of AI research, full-stack products and systems engineering.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-8 flex flex-wrap gap-2",
			children: filters.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setActive(f),
				className: `rounded-full px-4 py-1.5 text-sm transition-all ${active === f ? "bg-gradient-to-r from-brand-blue to-brand-purple text-background" : "glass text-muted-foreground hover:text-foreground"}`,
				children: f
			}, f))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 md:grid-cols-2",
			children: visible.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: `group relative overflow-hidden rounded-3xl glass-strong p-6 hover-lift ${p.featured ? "md:col-span-2" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-60 transition-opacity group-hover:opacity-100` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [p.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
									size: 16,
									className: "text-brand-cyan"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl font-bold sm:text-2xl",
									children: p.title
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-end gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-wider text-brand-cyan",
									children: p.category
								}), p.status && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[10px] text-emerald-300",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" }), p.status]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground sm:text-base",
							children: p.description
						}),
						p.features && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 grid gap-1.5 sm:grid-cols-2",
							children: p.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2 text-xs text-foreground/80 sm:text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1 w-1 flex-none rounded-full bg-brand-cyan" }), f]
							}, f))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex flex-wrap gap-1.5",
							children: p.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-foreground/80",
								children: t
							}, t))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: p.github,
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex items-center gap-2 rounded-lg glass px-3 py-2 text-xs font-medium hover:text-brand-cyan",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { size: 14 }), " Code"]
							}), p.demo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: p.demo,
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand-blue to-brand-purple px-3 py-2 text-xs font-medium text-background",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { size: 14 }), " Live Demo"]
							})]
						})
					]
				})]
			}, p.title))
		})]
	});
}
var items = [
	{
		icon: Trophy,
		title: "Top 30 Winner among 650+ participants",
		org: "Innovation Marathon 2.0 by VOIS & Edunet Foundation",
		year: "2025-2026"
	},
	{
		icon: GitBranch,
		title: "GSSoC'26 Contributor • PRs Submitted • Multiple Issues Resolved",
		org: "GSSoC'26 by Open Source Community",
		year: "2026"
	},
	{
		icon: Cloud,
		title: "Technical Team Member",
		org: "AWS Student Builder Program",
		year: "2025"
	},
	{
		icon: CodeXml,
		title: "Hackathon Participant",
		org: "SIH & Multiple National Hackathons",
		year: "2024 – 2026"
	},
	{
		icon: Sparkles,
		title: "Selected for AI & Tech Programs",
		org: "Various national initiatives",
		year: "Ongoing"
	}
];
function Achievements() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "achievements",
		eyebrow: "Achievements",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Milestones & ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "gradient-text",
			children: "recognition"
		})] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "relative space-y-6 border-l border-white/10 pl-6 sm:pl-10",
			children: items.map((it, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "relative animate-fade-in",
				style: { animationDelay: `${idx * 80}ms` },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute -left-[34px] sm:-left-[46px] grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-blue via-brand-purple to-brand-cyan text-background shadow-lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, { size: 16 })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rounded-2xl p-5 hover-lift",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-bold",
							children: it.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-muted-foreground",
							children: it.year
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: it.org
					})]
				})]
			}, it.title))
		})
	});
}
function Education() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "education",
		eyebrow: "Education",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Academic ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "gradient-text",
			children: "background"
		})] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass-strong rounded-3xl p-6 sm:p-8 hover-lift",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-purple text-background",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-bold",
								children: "Bachelor of Technology"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "Computer Science Engineering"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-6 grid grid-cols-2 gap-4 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass rounded-2xl p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs uppercase tracking-wider text-muted-foreground",
								children: "Expected"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 font-display text-2xl font-bold gradient-text",
								children: "2028"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass rounded-2xl p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs uppercase tracking-wider text-muted-foreground",
								children: "CGPA"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 font-display text-2xl font-bold gradient-text",
								children: "8.3"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-sm text-muted-foreground",
						children: "Focus areas: Artificial Intelligence, Machine Learning, Data Structures, Algorithms, and Full-Stack Web Development."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass-strong rounded-3xl p-6 sm:p-8 hover-lift",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-purple to-brand-cyan text-background",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-bold",
								children: "GitHub"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://github.com/itsmitalijadhav06-beep",
								target: "_blank",
								rel: "noreferrer",
								className: "text-sm text-muted-foreground hover:text-brand-cyan",
								children: "@itsmitalijadhav06-beep"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid grid-cols-3 gap-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass rounded-2xl p-4 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
										size: 16,
										className: "mx-auto text-brand-cyan"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 font-display text-xl font-bold",
										children: "5+"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] uppercase tracking-wider text-muted-foreground",
										children: "Stars"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass rounded-2xl p-4 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitFork, {
										size: 16,
										className: "mx-auto text-brand-cyan"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 font-display text-xl font-bold",
										children: "5+"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] uppercase tracking-wider text-muted-foreground",
										children: "Forks"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass rounded-2xl p-4 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, {
										size: 16,
										className: "mx-auto text-brand-cyan"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 font-display text-xl font-bold",
										children: "10+"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] uppercase tracking-wider text-muted-foreground",
										children: "Repos"
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://github.com/itsmitalijadhav06-beep",
						target: "_blank",
						rel: "noreferrer",
						className: "mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple px-4 py-2 text-sm font-medium text-background",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { size: 16 }), " View GitHub Profile"]
					})
				]
			})]
		})
	});
}
var schema = objectType({
	name: stringType().trim().min(1, "Name required").max(80),
	email: stringType().trim().email("Invalid email").max(160),
	message: stringType().trim().min(5, "Too short").max(1e3)
});
function Contact() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const onSubmit = (e) => {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const parsed = schema.safeParse({
			name: fd.get("name"),
			email: fd.get("email"),
			message: fd.get("message")
		});
		if (!parsed.success) {
			toast.error(parsed.error.issues[0]?.message ?? "Invalid input");
			return;
		}
		const body = encodeURIComponent(`From: ${parsed.data.name} <${parsed.data.email}>\n\n${parsed.data.message}`);
		window.location.href = `mailto:mitalijadhav@example.com?subject=${encodeURIComponent("Portfolio contact from " + parsed.data.name)}&body=${body}`;
		setSent(true);
		toast.success("Opening your email client...");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "contact",
		eyebrow: "Contact",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Let's ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "gradient-text",
				children: "build"
			}),
			" together"
		] }),
		description: "Open to internships, collaborations, and meaningful conversations.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-[1fr_1.2fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
						icon: Mail,
						label: "Email",
						value: "its.mitalijadhav06@gmail.com",
						href: "mailto:its.mitalijadhav06@gmail.com"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
						icon: Linkedin,
						label: "LinkedIn",
						value: "linkedin.com/in/mitalijadhav",
						href: "https://www.linkedin.com/in/mitali-jadhav-04549a331"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
						icon: Github,
						label: "GitHub",
						value: "github.com/mitalijadhav",
						href: "https://github.com/itsmitalijadhav06-beep"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "glass-strong rounded-3xl p-6 sm:p-8 space-y-4",
				noValidate: true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							name: "name",
							label: "Your name",
							placeholder: "Jane Doe"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							name: "email",
							type: "email",
							label: "Email",
							placeholder: "jane@company.com"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "mb-1 block text-xs uppercase tracking-wider text-muted-foreground",
						children: "Message"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						name: "message",
						rows: 5,
						required: true,
						maxLength: 1e3,
						placeholder: "Tell me about your project, role, or idea...",
						className: "w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-brand-cyan/60 focus:ring-2 focus:ring-brand-cyan/30"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						className: "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan px-5 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.01] sm:w-auto",
						children: [sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { size: 16 }), sent ? "Sent" : "Send Message"]
					})
				]
			})]
		})
	});
}
function ContactCard({ icon: Icon, label, value, href }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		target: href.startsWith("http") ? "_blank" : void 0,
		rel: "noreferrer",
		className: "glass flex items-center gap-4 rounded-2xl p-5 hover-lift",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-purple text-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 18 })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs uppercase tracking-wider text-muted-foreground",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "truncate text-sm font-medium",
				children: value
			})]
		})]
	});
}
function Field({ name, label, type = "text", placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "mb-1 block text-xs uppercase tracking-wider text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		name,
		type,
		required: true,
		maxLength: 160,
		placeholder,
		className: "w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-brand-cyan/60 focus:ring-2 focus:ring-brand-cyan/30"
	})] });
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "relative mt-16 border-t border-white/10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted-foreground",
				children: [
					"Designed and Developed by",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "gradient-text font-semibold",
						children: "Mitali Jadhav"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://github.com/itsmitalijadhav06-beep",
						target: "_blank",
						rel: "noreferrer",
						"aria-label": "GitHub",
						className: "grid h-9 w-9 place-items-center rounded-lg glass hover:text-brand-cyan",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { size: 16 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://www.linkedin.com/in/mitali-jadhav-04549a331",
						target: "_blank",
						rel: "noreferrer",
						"aria-label": "LinkedIn",
						className: "grid h-9 w-9 place-items-center rounded-lg glass hover:text-brand-cyan",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { size: 16 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "mailto:its.mitalijadhav06@gmail.com",
						"aria-label": "Email",
						className: "grid h-9 w-9 place-items-center rounded-lg glass hover:text-brand-cyan",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 16 })
					})
				]
			})]
		})
	});
}
function ScrollTop() {
	const [show, setShow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setShow(window.scrollY > 600);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	if (!show) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		"aria-label": "Scroll to top",
		onClick: () => window.scrollTo({
			top: 0,
			behavior: "smooth"
		}),
		className: "fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-brand-blue via-brand-purple to-brand-cyan text-background shadow-lg glow animate-fade-in",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { size: 18 })
	});
}
function Loader() {
	const [done, setDone] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const t = setTimeout(() => setDone(true), 900);
		return () => clearTimeout(t);
	}, []);
	if (done) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[100] grid place-items-center bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-16 w-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-full border-2 border-white/10" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-brand-cyan border-r-brand-purple" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-2 grid place-items-center rounded-full bg-gradient-to-br from-brand-blue via-brand-purple to-brand-cyan text-background font-display font-bold",
						children: "MJ"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground",
				children: "Loading portfolio"
			})]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "dark min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				theme: "dark",
				position: "top-center"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Achievements, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Education, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollTop, {})
		]
	});
}
//#endregion
export { Index as component };
