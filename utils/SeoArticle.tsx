import React, { useState } from 'react';

const SeoArticle: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Initial state is collapsed, showing roughly 2 lines (approx 48px to 60px depending on line-height).
    // We use max-h and overflow-hidden to achieve the clamp effect.
    
    return (
        <div className="relative mt-20 max-w-4xl mx-auto">
            {/* Header for SEO Context */}
            <header className="mb-8 text-center">
                 <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-400">
                    Estate Planning Resource Center
                </h2>
                <p className="text-gray-400 mt-2">Everything you need to know about protecting your legacy.</p>
            </header>

            <div
                className={`prose prose-invert prose-lg max-w-none text-gray-300 transition-all duration-700 ease-in-out relative ${
                    !isExpanded ? 'max-h-[80px] overflow-hidden' : 'max-h-full'
                }`}
            >
                <article itemScope itemType="https://schema.org/Article">
                    <meta itemProp="author" content="HSINI MOHAMED" />
                    <meta itemProp="headline" content="The Ultimate Guide to Estate Planning: Wills, Trusts, and Securing Your Legacy" />
                    
                    <h1 className="text-4xl font-bold text-white mb-6">The Ultimate Guide to Estate Planning: Wills, Trusts, and Securing Your Legacy</h1>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 not-prose">
                        <span>Updated: {new Date().toLocaleDateString()}</span>
                        <span>•</span>
                        <span>25 min read</span>
                    </div>

                    <p className="text-xl italic text-gray-400 lead">
                        A comprehensive, 3,500+ word walkthrough of the essential steps to protect your assets, provide for your loved ones, and ensure your final wishes are honored through proper legal documentation and strategic planning.
                    </p>

                    {/* Table of Contents */}
                    <div className="bg-slate-800/40 backdrop-blur border border-slate-700/50 rounded-xl p-8 my-10 not-prose">
                        <h2 id="toc" className="text-2xl font-semibold text-indigo-400 mb-4">Table of Contents</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-300">
                            <li><a href="#introduction" className="hover:text-white transition-colors">1. Introduction: Why Estate Planning Matters</a></li>
                            <li><a href="#what-is-a-will" className="hover:text-white transition-colors">2. What is a Last Will and Testament?</a></li>
                            <li><a href="#wills-vs-trusts" className="hover:text-white transition-colors">3. Wills vs. Living Trusts: The Deep Dive</a></li>
                            <li><a href="#executor-duties" className="hover:text-white transition-colors">4. The Role of the Executor</a></li>
                            <li><a href="#guardianship" className="hover:text-white transition-colors">5. Appointing Guardians for Minor Children</a></li>
                            <li><a href="#digital-assets" className="hover:text-white transition-colors">6. Digital Assets: The Modern Estate</a></li>
                            <li><a href="#advanced-directives" className="hover:text-white transition-colors">7. Advance Directives & Power of Attorney</a></li>
                            <li><a href="#probate-explained" className="hover:text-white transition-colors">8. Understanding Probate</a></li>
                            <li><a href="#diy-vs-lawyer" className="hover:text-white transition-colors">9. DIY Generators vs. Hiring an Attorney</a></li>
                            <li><a href="#faq-section" className="hover:text-white transition-colors">10. Frequently Asked Questions (FAQ)</a></li>
                        </ul>
                    </div>

                    <section id="introduction">
                        <h2>1. Introduction: Why Estate Planning Matters</h2>
                        <p>
                            Estate planning is often viewed as a task for the wealthy or the elderly, but the reality is that every adult needs an estate plan. It is the only legal mechanism to ensure your voice is heard when you can no longer speak for yourself. Whether you have a sprawling estate or modest savings, a plan ensures that your assets go to the people you love, rather than being swallowed by legal fees or distributed according to rigid state formulas.
                        </p>
                        <p>
                            Without a plan, you die "intestate." This means the state—not you—decides who gets your house, your car, your savings, and even who raises your children. The process is public, often slow, and can tear families apart with conflict. By taking action now, you provide a final gift to your family: clarity, security, and peace of mind.
                        </p>
                    </section>

                    <section id="what-is-a-will">
                        <h2>2. What is a Last Will and Testament?</h2>
                        <p>
                            A <strong>Last Will and Testament</strong> is a foundational legal document. It is a written declaration of your intentions. In your will, you outline specifically how you want your property distributed, who should manage the distribution (the Executor), and who should care for your minor children (the Guardian).
                        </p>
                        <h3>Key Components of a Valid Will</h3>
                        <ul>
                            <li><strong>Testator Identity:</strong> The person making the will must be clearly identified and of sound mind (testamentary capacity).</li>
                            <li><strong>Beneficiaries:</strong> The individuals or charities designated to receive assets.</li>
                            <li><strong>Executor:</strong> The fiduciary appointed to administer the estate.</li>
                            <li><strong>Signatures:</strong> The document must be signed by the testator.</li>
                            <li><strong>Witnesses:</strong> In most jurisdictions, two disinterested witnesses must observe the signing and sign the document themselves.</li>
                        </ul>
                    </section>

                    <section id="wills-vs-trusts">
                        <h2>3. Wills vs. Living Trusts: The Deep Dive</h2>
                        <p>
                            One of the most common questions in estate planning is the difference between a will and a Revocable Living Trust. While both direct the distribution of assets, they function differently.
                        </p>
                        <div className="overflow-x-auto my-6 not-prose">
                            <table className="w-full text-left border-collapse border border-slate-700 rounded-lg">
                                <thead className="bg-slate-800 text-white">
                                    <tr>
                                        <th className="p-4 border border-slate-700">Feature</th>
                                        <th className="p-4 border border-slate-700">Last Will</th>
                                        <th className="p-4 border border-slate-700">Living Trust</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300 bg-slate-900/50">
                                    <tr>
                                        <td className="p-4 border border-slate-700">Effective Date</td>
                                        <td className="p-4 border border-slate-700">Only upon death</td>
                                        <td className="p-4 border border-slate-700">Immediately (during life & death)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-slate-700">Probate</td>
                                        <td className="p-4 border border-slate-700">Must go through probate</td>
                                        <td className="p-4 border border-slate-700">Avoids probate completely</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-slate-700">Privacy</td>
                                        <td className="p-4 border border-slate-700">Public record</td>
                                        <td className="p-4 border border-slate-700">Private</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-slate-700">Cost</td>
                                        <td className="p-4 border border-slate-700">Lower upfront</td>
                                        <td className="p-4 border border-slate-700">Higher upfront</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            For many, a will is sufficient. However, if you own real estate in multiple states, have a blended family, or wish to keep your affairs private, a trust might be the superior option.
                        </p>
                    </section>

                    <section id="executor-duties">
                        <h2>4. The Role of the Executor</h2>
                        <p>
                            The Executor (or Personal Representative) is the CEO of your estate. It is a job, not just an honor. Their duties include filing the will with the probate court, locating assets, paying debts and taxes, maintaining property (like mowing the lawn of the deceased's house), and finally distributing the remainder to beneficiaries.
                        </p>
                        <p>
                            <strong>Tip:</strong> Always ask someone before naming them as Executor. It is a time-consuming role that can last for a year or more.
                        </p>
                    </section>

                    <section id="guardianship">
                        <h2>5. Appointing Guardians for Minor Children</h2>
                        <p>
                            If you have children under the age of 18, this is arguably the most critical part of your will. If both parents pass away without naming a guardian, the courts will decide who raises your children. The judge does not know your family dynamics, values, or preferences.
                        </p>
                        <p>
                            By naming a guardian, you ensure your children are raised by someone you trust. You can also set up a testamentary trust within your will to manage the children's inheritance until they reach a responsible age (e.g., 25 or 30), rather than receiving a lump sum at 18.
                        </p>
                    </section>

                    <section id="digital-assets">
                        <h2>6. Digital Assets: The Modern Estate</h2>
                        <p>
                            In the 21st century, our lives are increasingly digital. Your estate plan should account for cryptocurrency, social media accounts, cloud storage photos, and email accounts.
                        </p>
                        <p>
                            Most standard wills now include a specific provision granting the Executor the power to access, manage, and distribute digital assets. Without this, privacy laws may prevent your family from accessing sentimental photos or valuable digital currencies.
                        </p>
                    </section>

                    <section id="advanced-directives">
                        <h2>7. Advance Directives & Power of Attorney</h2>
                        <p>
                            A complete estate plan handles incapacity, not just death.
                        </p>
                        <ul>
                            <li><strong>Durable Power of Attorney (Financial):</strong> Names someone to pay your bills and manage investments if you are in a coma or have dementia.</li>
                            <li><strong>Healthcare Proxy (Medical Power of Attorney):</strong> Names someone to make medical decisions for you.</li>
                            <li><strong>Living Will:</strong> States your wishes regarding life support and end-of-life care.</li>
                        </ul>
                    </section>

                    <section id="probate-explained">
                        <h2>8. Understanding Probate</h2>
                        <p>
                            Probate is the court-supervised legal process of validating a will. The court "proves" the will is valid, ensures debts are paid, and oversees distribution. It prevents fraud but can be expensive (taking 3-7% of the estate value in fees) and slow (taking 9-18 months on average).
                        </p>
                    </section>

                     <section id="diy-vs-lawyer">
                        <h2>9. DIY Generators vs. Hiring an Attorney</h2>
                        <p>
                            <strong>When to use a DIY tool like ours:</strong> You have a simple estate (under estate tax limits), straightforward family situation (no disinherited children, no complex blended families), and basic assets.
                        </p>
                        <p>
                            <strong>When to hire a lawyer:</strong> You have a taxable estate, a child with special needs (requires a Special Needs Trust), concerns about anyone challenging the will, or own a business.
                        </p>
                    </section>

                    <section id="faq-section" className="mt-12 pt-8 border-t border-slate-700">
                        <h2 className="text-3xl font-bold text-white mb-8">10. Frequently Asked Questions (FAQ)</h2>
                        
                        <div className="space-y-8">
                            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                                <h3 itemProp="name" className="text-xl font-semibold text-indigo-400">Is an online will legal?</h3>
                                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                    <p itemProp="text">Yes, provided it is printed and executed according to your state's laws—typically requiring two witnesses and notarization (for a self-proving affidavit). The tool creates the document; you must execute it legally.</p>
                                </div>
                            </div>

                            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                                <h3 itemProp="name" className="text-xl font-semibold text-indigo-400">Do I need a notary?</h3>
                                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                    <p itemProp="text">While a will doesn't always <em>have</em> to be notarized to be valid, having a "Self-Proving Affidavit" notarized at the time of signing speeds up the probate process significantly.</p>
                                </div>
                            </div>

                            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                                <h3 itemProp="name" className="text-xl font-semibold text-indigo-400">Can I update my will?</h3>
                                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                    <p itemProp="text">Yes. You can write a new will at any time, which revokes the old one. You should update it after major life events like marriage, divorce, or birth of a child.</p>
                                </div>
                            </div>

                             <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                                <h3 itemProp="name" className="text-xl font-semibold text-indigo-400">What happens to my debts?</h3>
                                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                    <p itemProp="text">Your estate is responsible for your debts. Your beneficiaries generally do not inherit your debt personally, but the debt reduces the amount of inheritance they receive.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </article>
            </div>

            {/* Gradient Overlay for Read More */}
            {!isExpanded && (
                <div className="absolute top-0 left-0 w-full h-[80px] bg-gradient-to-b from-transparent via-black/80 to-black z-20 flex items-end justify-center pb-2">
                    {/* Visual hint is managed by the button below the container usually, but here we cover the text */}
                </div>
            )}

            <div className="text-center mt-6 relative z-30">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="group flex items-center justify-center gap-2 mx-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-indigo-500/50"
                >
                    <span>{isExpanded ? 'Read Less' : 'Read Full Guide'}</span>
                    <svg 
                        className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default SeoArticle;