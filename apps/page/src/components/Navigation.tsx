'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
    name: string;
    slug: string;
}

export function Navigation({ name, slug }: NavigationProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
            }`}>
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
                <Link href={`/${slug}`} className="flex items-center gap-2 group">
                    <div className="relative w-24 h-8 md:w-28 md:h-10">
                        <img
                            src={isScrolled ? '/images/logo-y.gif' : '/images/logo-w.gif'}
                            alt="Logo"
                            className="w-full h-full object-contain object-left"
                        />
                    </div>
                    <span className={`font-bold text-xl transition-colors ${isScrolled ? 'text-gray-900' : 'text-black'
                        }`}>
                        {name}
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {['소개', '약속', '활동', '후원'].map((item, idx) => {
                        const ids = ['about', 'policies', 'reports', 'donation'];
                        return (
                            <button
                                key={item}
                                onClick={() => scrollToSection(ids[idx])}
                                className={`font-medium text-lg transition-colors hover:text-justice-yellow ${isScrolled ? 'text-gray-600' : 'text-black'
                                    }`}
                            >
                                {item}
                            </button>
                        );
                    })}
                    <button
                        onClick={() => scrollToSection('donation')}
                        className={`px-6 py-2 rounded-full font-bold transition-all ${isScrolled
                            ? 'bg-justice-yellow text-black hover:bg-justice-yellow-dark'
                            : 'bg-white text-black hover:bg-gray-100'
                            }`}
                    >
                        후원하기
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-justice-green"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className={`w-8 h-8 ${isScrolled ? 'text-black' : 'text-white'}`} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white shadow-lg p-6 flex flex-col gap-4 md:hidden border-t">
                    {['소개', '약속', '활동', '후원'].map((item, idx) => {
                        const ids = ['about', 'policies', 'reports', 'donation'];
                        return (
                            <button
                                key={item}
                                onClick={() => scrollToSection(ids[idx])}
                                className="text-left py-3 text-lg font-medium text-gray-800 border-b border-gray-100 last:border-0"
                            >
                                {item}
                            </button>
                        );
                    })}
                </div>
            )}
        </nav>
    );
}
