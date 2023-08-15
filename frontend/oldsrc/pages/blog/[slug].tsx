import { GetServerSideProps } from "next";
import React from "react";
import { Article } from "@/types";
import Head from 'next/head';
import PostService from "@/services/PostService";
import Layout from "@/components/layout/Layout";
import ReactMarkdown from "react-markdown"

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const postSlug = params?.slug ? params.slug : undefined;

  if (!postSlug) { return { notFound: true } }

  const post = await PostService.getById(postSlug);
  return { props: { post } }
}

const BlogPost: NextPage<{ post: Article }> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{`Meagan Waller - ${post.title}`}</title>
      </Head>
      <Layout>
      <div className="w-[85%] mx-auto flex justify-center items-center">
        <div className="relative bg-white box-border-w-[90%] shadow-[3px_3px_(rgb(var(--color-primary)))] rounded-[25px_25px] border-[3px] border-solid border-neutral-dark">
          <div className="flex justify-between items-center box-border w-full text-primary-four px-5 py-2.5 rounded-[22px_22px_0_0] border-b-[3px] border-b-neutral-dark border-solid bg-primary">
            <div className="text-base tracking-wider font-extra">
              <prefix className="text-[13px] font-bold uppercase align-middle">[{post.category.title}]</prefix>
              {post.title}
              <span className="block text-[11px] tracking-wider leading-snug pr-0 py-0">{post.published_date}</span>
            </div>
            <div className="flex justify-end items-center h-10">
              <dot className="bg-accent-first-three w-2.5 h-2.5 ml-[7px] mr-0 my-0 rounded-[25px_25px] border-2 border-solid border-neutral-dark-four"></dot>
              <dot className="bg-accent-first-three w-2.5 h-2.5 ml-[7px] mr-0 my-0 rounded-[25px_25px] border-2 border-solid border-neutral-dark-four"></dot>
              <dot className="bg-accent-first-three w-2.5 h-2.5 ml-[7px] mr-0 my-0 rounded-[25px_25px] border-2 border-solid border-neutral-dark-four"></dot>
            </div>
          </div>
          <div className="flex justify-between items-start text-neutral-dark mt-0 mb-[55px] mx-0 p-5 wp2-chan-main">
            <div className="box-border w-1/5 ml-0 mr-5 my-0 wp2-chan-author">
              <div className="flex justify-start items-center flex-col border-t-[3px] border-t-primary-two border-x-[3px] border-x-primary-two border-solid bg-primary/40">
                <top className="box-border w-full h-11 text-[13px] font-bold tracking-[0.08em] text-center uppercase p-2.5 border-b-[3px] border-b-primary-two border-solid bg-primary-two/80 text-primary-four">Meagan</top>
                <img src="https://abload.de/img/postbit-2022-10-09_okw8fuv.gif" className="w-full h-auto max-h-[220px]" />
              </div>
              <div className="flex justify-between items-center wp2-chan-userlinks">
                <href className="box-border w-3/12 text-[13px] text-center shadow-[2px_2px_#363636] mt-2.5 mb-0 mx-[5px] px-[5px] py-[7px] border-2 border-solid border-[#363636] hover:cursor-help first:ml-0 first:mr-[5px] first:mt-2.5 first:mb-0 last:ml-[5px] last:mr-0 last:mt-2.5 last:mb-0 bg-tertiary-two" title="Gehe zur « Hall of Fame » von Chan"><i className="fa-solid fa-award"></i></href>
                <href className="box-border w-3/12 text-[13px] text-center shadow-[2px_2px_#363636] mt-2.5 mb-0 mx-[5px] px-[5px] py-[7px] border-2 border-solid border-[#363636] hover:cursor-help first:ml-0 first:mr-[5px] first:mt-2.5 first:mb-0 last:ml-[5px] last:mr-0 last:mt-2.5 last:mb-0 bg-tertiary-two" title="Chan besitzt keine Coding-Galerie"><i className="fa-solid fa-code"></i></href>
                <href className="box-border w-3/12 text-[13px] text-center shadow-[2px_2px_#363636] mt-2.5 mb-0 mx-[5px] px-[5px] py-[7px] border-2 border-solid border-[#363636] hover:cursor-help first:ml-0 first:mr-[5px] first:mt-2.5 first:mb-0 last:ml-[5px] last:mr-0 last:mt-2.5 last:mb-0 bg-tertiary-two" title="Chan besitzt keine Coding-Galerie"><i className="fa-solid fa-code"></i></href>
                <href className="box-border w-3/12 text-[13px] text-center shadow-[2px_2px_#363636] mt-2.5 mb-0 mx-[5px] px-[5px] py-[7px] border-2 border-solid border-[#363636] hover:cursor-help first:ml-0 first:mr-[5px] first:mt-2.5 first:mb-0 last:ml-[5px] last:mr-0 last:mt-2.5 last:mb-0 bg-tertiary-two" title="Chan besitzt keine Coding-Galerie"><i className="fa-solid fa-code"></i></href>
              </div>
              <div className="bg-primary/40 flex justify-start items-center flex-col box-border shadow-[3px_3px_#363636] mt-[15px] mb-0 mx-0 border-[3px] border-solid border-[#363636] wp2-chan-userinfos">
                <div className="flex justify-between items-center box-border w-full text-[9px] tracking-[0.08em] uppercase align-middle p-2.5 border-b-2 border-b-[#363636] border-solid last:border-[none]"><span className="w-3/5">Themen</span><span className="w-2/5 text-right">109</span></div>
                <div className="flex justify-between items-center box-border w-full text-[9px] tracking-[0.08em] uppercase align-middle p-2.5 border-b-2 border-b-[#363636] border-solid last:border-[none]"><span className="w-3/5">Themen</span><span className="w-2/5 text-right">109</span></div>
                <div className="flex justify-between items-center box-border w-full text-[9px] tracking-[0.08em] uppercase align-middle p-2.5 border-b-2 border-b-[#363636] border-solid last:border-[none]"><span className="w-3/5">Themen</span><span className="w-2/5 text-right">109</span></div>
                <div className="flex justify-between items-center box-border w-full text-[9px] tracking-[0.08em] uppercase align-middle p-2.5 border-b-2 border-b-[#363636] border-solid last:border-[none]"><span className="w-3/5">Themen</span><span className="w-2/5 text-right">109</span></div>
              </div>
            </div>
            <div className="bg-primary/40 box-border w-4/5 border-[3px] border-solid border-neutral-dark">
              <top className="bg-tertiary-two flex justify-between items-center box-border w-full h-10 text-neutral pl-2.5 pr-[7px] py-[7px] border-b-[3px] border-b-neutral-dark border-solid">
                <div className="flex justify-evenly items-center text-text wp2-chan-post-buttons">
                  {post.tags.map((tag: string, i: number) => (
                    <span key={i} className="h-8 hover:cursor-pointer hover:bg-secondary shadow-[1px_1px_rgb(var(--color-secondary-four))] text-[9px] tracking-[0.08em] uppercase align-middle mx-[5px] my-0 pl-1.5 pr-1 py-1 border-2 border-solid border-text bg-primary/60 font-mono" title={tag}>
                      <i className="fa-regular fa-pen-to-square"></i> {tag}
                    </span>
                  ))}
                </div>
              </top>
              <div
              className="bg-neutral-dark-four/80 font-mono box-border block w-full text-neutral text-xs tracking-wider uppercase align-middle text-right p-2.5"
              >
                {post.published_date} <i className="fa-regular fa-clock"></i>
              </div>
              <ReactMarkdown className="px-10 prose mt-5 text-lg font-sans leading-relaxed post-content">
                {post.content}
              </ReactMarkdown>
              <bottom className="border-t-[3px] border-t-[#363636] border-b-[none] border-solid bg-tertiary-two flex justify-between items-center box-border w-full h-10 text-[#fffbed] pl-2.5 pr-[7px] py-[7px] border-b-[3px] border-b-[#363636] border-solid">
                <div className="flex justify-evenly items-center text-[#363636] wp2-chan-post-buttons">
                  <span title="Schicke Chan eine Private Nachricht"><i className="fa-regular fa-envelope"></i> PN</span>
                  <span title="Finde alle Beiträge von Chan"><i className="fa-solid fa-magnifying-glass"></i> Suchen</span>
                  <span title="Diesen Beitrag zitieren"><i className="fa-solid fa-repeat"></i> Zitieren</span>
                  <span title="Diesen Beitrag melden"><i className="fa-regular fa-flag"></i> Melden</span>
                </div>
                <div className="flex justify-evenly items-center text-[#363636] wp2-chan-post-buttons">
                  <span title="Diesem Beitrag ein « Gefällt mir » hinzufügen"><i className="fa-regular fa-heart"></i> Gefällt mir</span>
                  <span title="Diesem Beitrag ein Danke hinzufügen"><i className="fa-regular fa-handshake"></i> Bedanken</span>
                </div>
              </bottom>
            </div>
          </div>
          <div className="absolute flex justify-evenly items-center box-border w-full pl-5 pr-[30px] py-2.5 rounded-[0_0_22px_22px] border-t-[3px] border-t-[#363636] border-solid left-0 bottom-0 wp2-chan-bottom">
            <div className="w-9/12 text-[10px] tracking-wider uppercase font-mono wp2-chan-threadnav">« <href>Ein Thema zurück</href> | <href>Ein Thema vor</href> »</div>
            <div className="wp2-chan-searchbar w-3/12 text-[#363636]">
              <searchbar
              className="after:bg-accent-first-two hover:after:cursor-pointer bg-white font-extra flex justify-between items-center w-full text-[11px] tracking-wider pl-2.5 pr-0 py-0 rounded-[25px_25px] border-2 border-solid border-[#363636] after:content-['\f0dd'] after:inline-block after:box-border after:w-[30px] after:h-[25px] after:text-base after:font-black after:text-center after:pl-0 after:pr-[3px] after:py-0 after:rounded-[0_25px_25px_0] after:border-l-2 after:border-l-[#363636] after:border-solid"
              title="Durchsuche Thema">Suchbegriff(e)</searchbar>
            </div>
          </div>
        </div>
      </div>
      <script src="https://kit.fontawesome.com/8abdf91326.js" crossorigin="anonymous"></script>
    </Layout>
  </>
  )
}

export default BlogPost;
