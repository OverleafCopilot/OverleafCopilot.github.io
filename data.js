const index = {
    "title": [
        { "text": "Overleaf", "color": "#408827" },
        { "text": "Copilot", "color": "#ff7300" }
    ],
    "slogan": "Seamlessly incorporate ChatGPT to power and accelerate academic writing in Overleaf.",
    "head_imgs": {
        "sm": "headline_sm.webp",
        "md": "headline_lg.webp",
        "lg": "headline_xl.webp"
    },
    "buttons": [
        {
            "url": "https://chromewebstore.google.com/detail/overleaf-copilot/eoadabdpninlhkkbhngoddfjianhlghb",
            "text": "Add to browser",
            "icon": "browser-chrome",
            "tooltip": "Compatible with Chrome, Edge, Opera, Arc and other Chromium-based Browsers",
            "style": "primary"
        },
        {
            "url": "./agents.html",
            "text": "Featured Agents",
            "icon": "robot",
            "style": "outline-danger"
        },
        {
            "url": "./premium-license.html",
            "text": "Premium License",
            "icon": "stars",
            "style": "outline-primary"
        }
    ],
    "cards": [
        {
            "title": "OpenAI Proxy: Effortless Access to GPT-3.5 and GPT-4",
            "texts": [
                "Access OpenAI models directly without the need for an API key, offering straightforward and immediate use."
            ],
            "img": "proxy.webp",
            "badge": ["stars", "Premium"]
        },
        {
            "title": "Completer: Crafting the Next Sentence for You",
            "texts": [
                "Complete or extend your sentences with context-aware suggestions."
            ],
            "img": "completor.webp",
            "badge": ["stars", "Premium"]
        },
        {
            "title": "Rewriter: Enhance Your Content with a Single Click",
            "texts": [
                "Easily refine your drafts into polished academic works."
            ],
            "img": "rewriter.webp"
        },
        {
            "title": "Translator: The Superior Choice for Academic Papers",
            "texts": [
                "Outperforms standard translation tools by preserving the academic tone and specific terminology effectively."
            ],
            "img": "translator.webp"
        },
        {
            "title": "Checker: An Advanced Grammar and Spelling Tool",
            "texts": [
                "Leverage AI for comprehensive detection and correction of writing errors, ensuring impeccable results."
            ],
            "img": "checker.webp"
        },
        {
            "title": "Deep Integration with Overleaf",
            "texts": [
                "Customize interface placement and size for an adaptable workflow."
            ],
            "img": "interface.webp"
        },
        {
            "title": "Highly Customizable Interface",
            "texts": [
                "Customize the interface theme to reflect your style and preference."
            ],
            "img": "theme.webp"
        },
        {
            "title": "Customizable Models and Prompts",
            "texts": [
                "Tailor ChatGPT models and prompts to meet your specific needs."
            ],
            "img": "models_prompts.webp"
        },
        {
            "title": "Enhanced Support for Rich Text Rendering",
            "texts": [
                "Effortlessly switch between rich text and source code modes for optimal viewing."
            ],
            "img": "rich_render.webp"
        },
        {
            "title": "Ongoing Evolution of Advanced Agents",
            "texts": [
                "Utilize our advanced Template Directive Engine (TDE) to facilitate dynamic interactions between Overleaf and ChatGPT."
            ],
            "img": "agents.webp"
        }
    ]
}

const premium_license = {
    "title": [
        { "text": "Overleaf", "color": "#408827" },
        { "text": "Copilot", "color": "#ff7300" },
        { "text": "Premium", "color": "#8c0000" }
    ],
    "slogan": "Seamlessly incorporate ChatGPT to power and accelerate academic writing in Overleaf.",
    "cards": [
        {
            "title": "OpenAI Proxy: Effortless Access to GPT-3.5 and GPT-4.",
            "texts": [
                "Access OpenAI models directly without the need for an API key, offering straightforward and immediate use."
            ],
            "img": "proxy.webp",
            "badge": ["stars", "Premium"]
        },
        {
            "title": "Completer: Crafting the Next Sentence for You.",
            "texts": [
                "Benefit from context-aware suggestions that assist when you're stuck.",
            ],
            "img": "completor.webp",
            "badge": ["stars", "Premium"]
        },
        {
            "title": "Advanced Agents: Elevating AI Integration to New Heights.",
            "texts": [
                "Leverage our sophisticated Template Directive Engine (TDE) for dynamic interactions between Overleaf and ChatGPT."
            ],
            "img": "agents.webp",
            "badge": ["code-slash", "In-development"]
        }
    ],
    "pricing": [
        {
            "title": "Free",
            "style": "secondary",
            "price": "¥0",
            "desc": [
                [
                    "Require OpenAI API Key: Yes",
                    "High-quality default prompts",
                    "Customizable prompts",
                    "Fully integrated with Overleaf"
                ]
            ],
            "button": {
                "text": "Start Using",
                "url": "https://chromewebstore.google.com/detail/overleaf-copilot/eoadabdpninlhkkbhngoddfjianhlghb",
                "style": "outline-primary"
            }
        },
        {
            "title": "Premium",
            "style": "primary",
            "price": "¥4.99",
            "span": "7Days",
            "desc": [
                [
                    "Require OpenAI API Key: No",
                    "High-quality default prompts",
                    "Customizable prompts",
                    "Fully integrated with Overleaf"
                ],
                [
                    " Access to GPT-4 ",
                    " Unlimited Agents ",
                    " Customizable shortcut ",
                    " Update of Advanced Agents ",
                    " 100 credits included "
                ]
            ],
            "button": {
                "text": "Buy",
                "url": "https://item.taobao.com/item.htm?ft=t&id=756329846221",
                "style": "primary"
            }
        },
        {
            "title": "Premium+",
            "style": "warning",
            "price": "¥14.99",
            "span": "30Days",
            "desc": [
                [
                    "Require OpenAI API Key: No",
                    "High-quality default prompts",
                    "Customizable prompts",
                    "Fully integrated with Overleaf"
                ],
                [
                    " Access to GPT-4 ",
                    " Unlimited Agents ",
                    " Customizable shortcut ",
                    " Update of Advanced Agents ",
                    " 400 credits included "
                ]
            ],
            "button": {
                "text": "Buy",
                "url": "https://item.taobao.com/item.htm?ft=t&id=760277782033",
                "style": "warning"
            }
        }
    ]
}

const featured_agents = [
    {
        "title": "Extended Rewriter",
        "desc": "Let Copilot help you polish your paragraph.",
        "level": 0,
        "author": "The OverleafCopilot Team",
        "img": "ext-rewriter.gif",
        "source": "https://overleafcopilot.github.io/agents/featured/ext-rewriter.xml",
        "private": false,
        "version": "0.5.16",
        "contact": "qq group: 314373462"
    }
]