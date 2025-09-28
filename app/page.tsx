'use client';

import React, { useEffect, useState } from 'react';
import { Globe, Smartphone, Headphones, CircleCheck as CheckCircle, Star, ArrowRight, Menu, X } from 'lucide-react';

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
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="block">
                <img 
                  src="/logo.png" 
                  alt="BlueLeaf Studio" 
                  className="h-28 w-auto"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a href="#services" className="text-gray-700 hover:text-primary-blue transition-colors duration-300">
                  サービス
                </a>
                <a href="#examples" className="text-gray-700 hover:text-primary-blue transition-colors duration-300">
                  事例
                </a>
                <a href="#pricing" className="text-gray-700 hover:text-primary-blue transition-colors duration-300">
                  料金
                </a>
                <a href="#contact" className="text-gray-700 hover:text-primary-blue transition-colors duration-300">
                  お問い合わせ
                </a>
                <a 
                  href="#"
                  className="bg-accent-green text-white px-6 py-2 rounded-full hover:bg-opacity-90 hover:-translate-y-1 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  公式LINEで無料相談
                </a>
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
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
                <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-primary-blue">
                  サービス
                </a>
                <a href="#examples" className="block px-3 py-2 text-gray-700 hover:text-primary-blue">
                  事例
                </a>
                <a href="#pricing" className="block px-3 py-2 text-gray-700 hover:text-primary-blue">
                  料金
                </a>
                <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-primary-blue">
                  お問い合わせ
                </a>
                <a 
                  href="#"
                  className="block mx-3 my-2 text-center bg-accent-green text-white px-4 py-2 rounded-full"
                >
                  公式LINEで無料相談
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-pale-blue via-white to-light-cyan">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
          <h1 className={`text-4xl md:text-6xl font-bold text-gray-900 mb-6 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
  園ごとの<span className="text-primary-blue">“らしさ”</span>をカタチに、<br />
  <span className="text-primary-green">魅力</span>を発信するホームページ
</h1>
            <p className={`text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
              幼稚園・保育園専門のデザインと運用で、<br />
              見学希望・入園相談を確実に増やします
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
              <a 
                href="#"
                className="bg-accent-green text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 hover:-translate-y-1 hover:scale-105 transition-all duration-300 shadow-lg inline-flex items-center justify-center"
              >
                公式LINEで無料相談（友だち追加）
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a 
                href="#examples"
                className="bg-white text-primary-blue px-8 py-4 rounded-full text-lg font-semibold border-2 border-primary-blue hover:bg-primary-blue hover:text-white hover:-translate-y-1 hover:scale-105 transition-all duration-300"
              >
                導入事例を見る
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              サービス紹介
            </h2>
            <p className="text-xl text-gray-600">
              幼稚園・保育園に特化した3つのサービス
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-on-scroll">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                園ホームページ制作
              </h3>
              <p className="text-gray-600 mb-6">
                園の魅力を最大限に表現する、保護者目線で設計されたホームページを制作します。
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="text-accent-green mr-2" size={16} />
                  保護者が知りたい情報を分かりやすく配置
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-accent-green mr-2" size={16} />
                  スマートフォン最適化
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-accent-green mr-2" size={16} />
                  SEO対策で検索上位表示
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-on-scroll">
              <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-6">
                <Smartphone className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                便利なWebサービス・PWAアプリ
              </h3>
              <p className="text-gray-600 mb-6">
                保護者の利便性を向上させる各種Webサービスやアプリを提供します。
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="text-accent-green mr-2" size={16} />
                  お便り配信システム
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-accent-green mr-2" size={16} />
                  オンライン予約システム
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-accent-green mr-2" size={16} />
                  写真共有アプリ
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-on-scroll">
              <div className="w-16 h-16 bg-soft-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Headphones className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                保守・運用サポート
              </h3>
              <p className="text-gray-600 mb-6">
                ホームページ公開後も安心して運用していただけるよう、継続的なサポートを提供します。
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="text-accent-green mr-2" size={16} />
                  定期的な更新作業代行
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-accent-green mr-2" size={16} />
                  セキュリティ対策
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-accent-green mr-2" size={16} />
                  技術サポート
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section id="examples" className="py-20 bg-pale-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              導入事例
            </h2>
            <p className="text-xl text-gray-600">
              実際に成果を上げている園様の事例をご紹介
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-on-scroll">
              <div className="h-48 bg-gradient-to-br from-primary-blue to-soft-blue flex items-center justify-center">
                <div className="text-white text-center">
                  <h4 className="text-2xl font-bold mb-2">さくら幼稚園</h4>
                  <p>園児数120名</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Star className="text-yellow-400 mr-1" size={20} />
                  <Star className="text-yellow-400 mr-1" size={20} />
                  <Star className="text-yellow-400 mr-1" size={20} />
                  <Star className="text-yellow-400 mr-1" size={20} />
                  <Star className="text-yellow-400 mr-1" size={20} />
                </div>
                <p className="text-gray-600 mb-4">
                  ホームページリニューアル後、入園相談の件数が<span className="font-bold text-accent-green">1.5倍に増加</span>しました。
                </p>
                <p className="text-sm text-gray-500">
                  「保護者の方から『ホームページが見やすくて安心した』という声をよくいただくようになりました。」
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-on-scroll">
              <div className="h-48 bg-gradient-to-br from-accent-green to-light-cyan flex items-center justify-center">
                <div className="text-white text-center">
                  <h4 className="text-2xl font-bold mb-2">みどり保育園</h4>
                  <p>園児数85名</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Star className="text-yellow-400 mr-1" size={20} />
                  <Star className="text-yellow-400 mr-1" size={20} />
                  <Star className="text-yellow-400 mr-1" size={20} />
                  <Star className="text-yellow-400 mr-1" size={20} />
                  <Star className="text-yellow-400 mr-1" size={20} />
                </div>
                <p className="text-gray-600 mb-4">
                  PWAアプリの導入により、保護者の<span className="font-bold text-accent-green">満足度が大幅に向上</span>しました。
                </p>
                <p className="text-sm text-gray-500">
                  「お便り配信が楽になり、保護者との連絡もスムーズになりました。」
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-on-scroll">
              <div className="h-48 bg-gradient-to-br from-soft-blue to-primary-blue flex items-center justify-center">
                <div className="text-white text-center">
                  <h4 className="text-2xl font-bold mb-2">ひまわり幼稚園</h4>
                  <p>園児数200名</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Star className="text-yellow-400 mr-1" size={20} />
                  <Star className="text-yellow-400 mr-1" size={20} />
                  <Star className="text-yellow-400 mr-1" size={20} />
                  <Star className="text-yellow-400 mr-1" size={20} />
                  <Star className="text-yellow-400 mr-1" size={20} />
                </div>
                <p className="text-gray-600 mb-4">
                  総合的なデジタル化により、<span className="font-bold text-accent-green">業務効率が40%向上</span>しました。
                </p>
                <p className="text-sm text-gray-500">
                  「先生たちの事務作業が軽減され、子どもたちと向き合う時間が増えました。」
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              料金プラン
            </h2>
            <p className="text-xl text-gray-600">
              園の規模やニーズに合わせて選べる3つのプラン
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-on-scroll">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ベーシック</h3>
              <div className="text-4xl font-bold text-primary-blue mb-2">¥298,000</div>
              <div className="text-gray-600 mb-8">初期費用・基本サイト制作</div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="text-accent-green mr-3" size={20} />
                  5ページ構成のホームページ
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-accent-green mr-3" size={20} />
                  スマートフォン対応
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-accent-green mr-3" size={20} />
                  SEO基本設定
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-accent-green mr-3" size={20} />
                  問い合わせフォーム
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-accent-green mr-3" size={20} />
                  3ヶ月間のサポート
                </li>
              </ul>
              <a 
                href="#"
                className="w-full bg-primary-blue text-white py-3 rounded-full font-semibold hover:bg-opacity-90 hover:-translate-y-1 hover:scale-105 transition-all duration-300 inline-block"
              >
                詳しく見る
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8 text-center border-4 border-accent-green relative hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-on-scroll">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent-green text-white px-6 py-2 rounded-full text-sm font-bold">
                おすすめ
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">スタンダード</h3>
              <div className="text-4xl font-bold text-accent-green mb-2">¥498,000</div>
              <div className="text-gray-600 mb-8">高機能サイト＋運用サポート</div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="text-accent-green mr-3" size={20} />
                  10ページ構成のホームページ
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-accent-green mr-3" size={20} />
                  お便り配信システム
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-accent-green mr-3" size={20} />
                  オンライン予約機能
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-accent-green mr-3" size={20} />
                  写真ギャラリー機能
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-accent-green mr-3" size={20} />
                  1年間の運用サポート
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-accent-green mr-3" size={20} />
                  月2回の更新代行
                </li>
              </ul>
              <a 
                href="#"
                className="w-full bg-accent-green text-white py-3 rounded-full font-semibold hover:bg-opacity-90 hover:-translate-y-1 hover:scale-105 transition-all duration-300 inline-block"
              >
                詳しく見る
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-on-scroll">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">カスタム</h3>
              <div className="text-4xl font-bold text-soft-blue mb-2">応相談</div>
              <div className="text-gray-600 mb-8">フルオーダーメイド</div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="text-accent-green mr-3" size={20} />
                  完全オリジナルデザイン
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-accent-green mr-3" size={20} />
                  PWAアプリ開発
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-accent-green mr-3" size={20} />
                  システム連携
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-accent-green mr-3" size={20} />
                  専属デザイナー・エンジニア
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-accent-green mr-3" size={20} />
                  無制限サポート
                </li>
              </ul>
              <a 
                href="#"
                className="w-full bg-soft-blue text-white py-3 rounded-full font-semibold hover:bg-opacity-90 hover:-translate-y-1 hover:scale-105 transition-all duration-300 inline-block"
              >
                相談する
              </a>
            </div>
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
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
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

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BlueLeaf Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}