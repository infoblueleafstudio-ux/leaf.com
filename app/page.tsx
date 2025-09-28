'use client';

import React, { useEffect, useState } from 'react';
import { Globe, Smartphone, Headphones, CircleCheck as CheckCircle, Star, ArrowRight, Menu, X } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="block">
                <img 
                  src="/logo.png" 
                  alt="BlueLeaf Studio" 
                  className="h-16 w-auto"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 ml-auto">
              <a href="#services" className="text-gray-600 hover:text-primary-blue transition-colors duration-300 text-sm">サービス</a>
              <a href="#examples" className="text-gray-600 hover:text-primary-blue transition-colors duration-300 text-sm">事例</a>
              <a href="#pricing" className="text-gray-600 hover:text-primary-blue transition-colors duration-300 text-sm">料金</a>
              <a href="#contact" className="text-gray-600 hover:text-primary-blue transition-colors duration-300 text-sm">お問い合わせ</a>
              <a href="#" className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all duration-300 shadow font-medium">
                公式LINEで無料相談
              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden ml-auto">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-primary-blue transition-colors duration-300"
                aria-label="メニューを開く"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-primary-blue text-sm">
                  サービス
                </a>
                <a href="#examples" className="block px-3 py-2 text-gray-600 hover:text-primary-blue text-sm">
                  事例
                </a>
                <a href="#pricing" className="block px-3 py-2 text-gray-600 hover:text-primary-blue text-sm">
                  料金
                </a>
                <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-primary-blue text-sm">
                  お問い合わせ
                </a>
                <a 
                  href="#"
                  className="block mx-3 my-2 text-center bg-green-500 text-white px-4 py-3 rounded-full hover:bg-green-600 transition-colors"
                >
                  公式LINEで無料相談
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center" style={{backgroundImage: 'url(\'/hero.jpg\')', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            園ごとの<span className="text-blue-300">"らしさ"</span>をカタチに、<br />
            <span className="text-green-300">魅力</span>を発信するホームページ
          </h1>
          <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed text-center">
  幼稚園・保育園専門のデザインと運用で<br className="sm:hidden" />
  見学希望・入園相談を確実に増やします
</p>

          <div className={`flex justify-center ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
            <a 
              href="#"
              className="bg-primary-green text-white px-12 py-6 rounded-full text-xl font-bold hover:bg-opacity-90 hover:-translate-y-2 hover:scale-110 transition-all duration-300 shadow-2xl inline-flex items-center"
            >
              LINEで無料相談
              <ArrowRight className="ml-3" size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              サービス紹介
            </h2>
            <p className="text-xl text-gray-600">
              幼稚園・保育園に特化した3つのサービス
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white rounded-2xl shadow-lg p-10 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-on-scroll">
              <div className="w-20 h-20 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-8">
                <Globe className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                園ホームページ制作
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                園の魅力を最大限に表現する、保護者目線で設計されたホームページを制作します。
              </p>
              <ul className="text-left text-gray-600 space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="text-primary-green mr-3" size={18} />
                  保護者が知りたい情報を分かりやすく配置
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-primary-green mr-3" size={18} />
                  スマートフォン最適化
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-primary-green mr-3" size={18} />
                  SEO対策で検索上位表示
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-10 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-on-scroll">
              <div className="w-20 h-20 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-8">
                <Smartphone className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                便利なWebサービス・PWAアプリ
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                保護者の利便性を向上させる各種Webサービスやアプリを提供します。
              </p>
              <ul className="text-left text-gray-600 space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="text-primary-green mr-3" size={18} />
                  お便り配信システム
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-primary-green mr-3" size={18} />
                  オンライン予約システム
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-primary-green mr-3" size={18} />
                  写真共有アプリ
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-10 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-on-scroll">
              <div className="w-20 h-20 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-8">
                <Headphones className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                保守・運用サポート
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                ホームページ公開後も安心して運用していただけるよう、継続的なサポートを提供します。
              </p>
              <ul className="text-left text-gray-600 space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="text-primary-green mr-3" size={18} />
                  定期的な更新作業代行
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-primary-green mr-3" size={18} />
                  セキュリティ対策
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-primary-green mr-3" size={18} />
                  技術サポート
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section id="examples" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              導入事例
            </h2>
            <p className="text-xl text-gray-600">
              実際に成果を上げている園様の事例をご紹介
            </p>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="h-56 bg-gradient-to-br from-primary-blue to-blue-200 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h4 className="text-2xl font-bold mb-2">さくら幼稚園</h4>
                    <p>園児数120名</p>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    <span className="font-bold text-primary-green">入園希望者120%増加</span>
                  </p>
                  <p className="text-sm text-gray-500 italic">
                    「ホームページリニューアル後、問い合わせ件数が倍増しました。」
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="h-56 bg-gradient-to-br from-primary-green to-green-200 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h4 className="text-2xl font-bold mb-2">みどり保育園</h4>
                    <p>園児数85名</p>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    <span className="font-bold text-primary-green">園児数85%増加</span>
                  </p>
                  <p className="text-sm text-gray-500 italic">
                    「写真ギャラリー機能が好評で、保護者から安心の声が寄せられています。」
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="h-56 bg-gradient-to-br from-primary-blue to-blue-200 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h4 className="text-2xl font-bold mb-2">ひまわり幼稚園</h4>
                    <p>園児数200名</p>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    <span className="font-bold text-primary-green">入園希望者200%増加</span>
                  </p>
                  <p className="text-sm text-gray-500 italic">
                    「ブログ更新機能を導入し、園の日常が伝わりやすくなりました。」
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              まずはご相談ください
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              園の規模やご要望に合わせて、最適なプランをご提案いたします
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="#"
              className="bg-primary-green text-white px-12 py-6 rounded-full text-xl font-bold hover:bg-opacity-90 hover:-translate-y-2 hover:scale-110 transition-all duration-300 shadow-2xl inline-flex items-center justify-center"
            >
              LINEで無料相談
              <ArrowRight className="ml-3" size={24} />
            </a>
            <a 
              href="#contact"
              className="bg-primary-blue text-white px-12 py-6 rounded-full text-xl font-bold hover:bg-opacity-90 hover:-translate-y-2 hover:scale-110 transition-all duration-300 shadow-2xl inline-flex items-center justify-center"
            >
              問い合わせフォームへ
              <ArrowRight className="ml-3" size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-blue to-soft-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            まずは公式LINEで無料相談
          </h2>
          <p className="text-xl text-white mb-12 opacity-90">
            園のホームページに関するお悩みやご質問、どんなことでもお気軽にご相談ください。<br />
            専門スタッフが丁寧にお答えします。
          </p>
          <a 
            href="#"
            className="bg-accent-green text-white px-12 py-6 rounded-full text-xl font-bold hover:bg-opacity-90 hover:-translate-y-2 hover:scale-110 transition-all duration-300 shadow-2xl inline-flex items-center"
          >
            公式LINE 友だち追加
            <ArrowRight className="ml-3" size={24} />
          </a>
          <p className="text-white mt-6 opacity-75">
            ※相談は完全無料です。お気軽にお問い合わせください。
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <h3 className="text-2xl font-bold text-primary-blue mb-4">
                BlueLeaf Studio
              </h3>
              <p className="text-gray-300 mb-4">
                幼稚園・保育園専門のホームページ制作サービス
              </p>
              <div className="space-y-2 text-gray-300">
                <p>〒000-0000</p>
                <p>東京都渋谷区○○○○1-2-3</p>
                <p>TEL: 03-0000-0000</p>
                <p>Email: info@blueleaf-studio.com</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">サービス</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-primary-blue transition-colors">ホームページ制作</a></li>
                <li><a href="#" className="hover:text-primary-blue transition-colors">PWAアプリ開発</a></li>
                <li><a href="#" className="hover:text-primary-blue transition-colors">運用サポート</a></li>
                <li><a href="#" className="hover:text-primary-blue transition-colors">SEO対策</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">サポート</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-primary-blue transition-colors">よくある質問</a></li>
                <li><a href="#" className="hover:text-primary-blue transition-colors">お問い合わせ</a></li>
                <li><a href="#" className="hover:text-primary-blue transition-colors">利用規約</a></li>
                <li><a href="#" className="hover:text-primary-blue transition-colors">プライバシーポリシー</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
              <p className="text-gray-300 mb-4">
                お気軽にご相談ください
              </p>
              <a 
                href="#"
                className="bg-accent-green text-white px-6 py-3 rounded-full hover:bg-opacity-90 hover:-translate-y-1 hover:scale-105 transition-all duration-300 inline-block"
              >
                公式LINEで相談
              </a>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-16 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BlueLeaf Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}