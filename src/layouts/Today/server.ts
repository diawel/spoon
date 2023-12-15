'use server'

import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY ?? '',
})

export const getFlavorName = async (
  color1: string,
  color2: string,
  color3: string
) => {
  const colorList = [color1, color2, color3]
  if (colorList.some((color) => !color.match(/^#[0-9a-f]{6}$/i))) return ''
  const completions = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: `You will receive 3 colorcodes and combine and imagine those colors to create one "Sweet Flavor". First, imagine what each color code corresponds to and create flavor. Be as creative as possible with your answers, using words that are not normally thought of as food. Do not use words that directly describe colors. Do not use any regular text. Please answer in one line with only one flavor. 日本語で、フレーバー名のみを1つだけ答えてください。フレーバー名は3文節以内で、覚えやすいものにしてください。読み・英訳・ローマ字はつけないでください。重要なのは日本語のフレーバー名のみです。フレーバー名のみを1つ答えてください。`,
      },
      {
        role: 'user',
        content: colorList.join(', '),
      },
    ],
    model: 'gpt-3.5-turbo',
    top_p: 0.5,
  })

  return completions.choices[0].message.content ?? ''
}
