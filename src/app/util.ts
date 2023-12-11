'use server'

import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY ?? '',
})

export const getFlavorName = async (colors: string[]) => {
  const completions = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content:
          'You will receive several color codes and you are to create one "ice cream flavor" associated with those colors. First imagine what each color code corresponds to, and then create your flavor. Be as creative as possible in your answer, using words that would not normally be considered food. Do not use any regular text. Please answer in one line with only one flavor. 日本語で、フレーバー名のみを1つだけ答えてください。読みや英訳はつけないでください。重要なのは日本語のフレーバー名のみです。',
      },
      {
        role: 'user',
        content: colors.join(', '),
      },
    ],
    model: 'gpt-3.5-turbo',
  })

  return completions.choices[0].message.content ?? ''
}
