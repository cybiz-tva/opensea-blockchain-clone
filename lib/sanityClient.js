import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '5n4y51jp',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'sk4a8BaXqBWFIiOnc1tBY8HH6HWT18Ra9jBcENRv0rOUUlWwFitrIqotetbgaXovaxHSOJXoo0GnA3G7iNBDH5oKnewsCFJnEWX5pLgRsi3AY3Jikb0H06ir5DhK9FRYXpvyz5gbFIvlv5krpiUl0ZSDNhtNQJzS1WnN26on1uRRHyErdd6f',
  useCdn: false,
})
