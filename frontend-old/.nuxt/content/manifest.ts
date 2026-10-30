export const checksums = {
  "index": "v3.5.0--QNrrXt_CsRJsnvw3cBNicjH1mMPQgM-QekobSH7yJ5w",
  "projects": "v3.5.0--dbwXkGjBCJi-n19uC1fSTdyxBxx2iXOAKjmYIEAI9Nw",
  "blog": "v3.5.0--HNTObgF34dqyhKjGLXH24yNuu0MBve8upZuvO8Chqjc",
  "pages": "v3.5.0--irhHyanfCcLN5r3ddbAIedVGSqxKkpU7cDLW-kNy6IQ",
  "speaking": "v3.5.0--WpS-Q_0Pxqtdvdlr4SZj0zYiTZ9d2FVBp1G2lpcSyA8",
  "about": "v3.5.0--GwFJ6j8rhqvKjUn3m_00avP2iRlwcBAEJoRuKLDky0k"
}
export const checksumsStructure = {
  "index": "OlB8K-FYQeiOmH_XYZUPmjxYW6W3oRCq3ruT1Br3SAE",
  "projects": "fPMREOruI1oepfApCB9vNqg8eQ42EjGDvAgUbFzMyDg",
  "blog": "PMMhvgGFocAPWVLx3gMtIzP4fDKba6Sbn_0u9hWJAMk",
  "pages": "3IjgIfEEf-jEHsY-RT_ootRkgk4JVF1_40-7S552Cfs",
  "speaking": "mx3wcXExXsrpiL3ywmz6_l1aKNy9k5ZmsvbIyKUasJQ",
  "about": "fNWjfi6QK17IkVo_GwVO6TE5eDF4m9P5PE52tFBRB8c"
}

export const tables = {
  "index": "_content_index",
  "projects": "_content_projects",
  "blog": "_content_blog",
  "pages": "_content_pages",
  "speaking": "_content_speaking",
  "about": "_content_about",
  "info": "_content_info"
}

export default {
  "index": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "about": "json",
      "blog": "json",
      "body": "json",
      "description": "string",
      "experience": "json",
      "extension": "string",
      "faq": "json",
      "hero": "json",
      "meta": "json",
      "navigation": "json",
      "path": "string",
      "seo": "json",
      "stem": "string",
      "testimonials": "json"
    }
  },
  "projects": {
    "type": "data",
    "fields": {
      "id": "string",
      "title": "string",
      "date": "date",
      "description": "string",
      "extension": "string",
      "image": "string",
      "meta": "json",
      "stem": "string",
      "tags": "json",
      "url": "string"
    }
  },
  "blog": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "author": "json",
      "body": "json",
      "date": "date",
      "description": "string",
      "extension": "string",
      "image": "string",
      "meta": "json",
      "minRead": "number",
      "navigation": "json",
      "path": "string",
      "seo": "json",
      "stem": "string"
    }
  },
  "pages": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "body": "json",
      "description": "string",
      "extension": "string",
      "links": "json",
      "meta": "json",
      "navigation": "json",
      "path": "string",
      "seo": "json",
      "stem": "string"
    }
  },
  "speaking": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "body": "json",
      "description": "string",
      "events": "json",
      "extension": "string",
      "links": "json",
      "meta": "json",
      "navigation": "json",
      "path": "string",
      "seo": "json",
      "stem": "string"
    }
  },
  "about": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "body": "json",
      "content": "json",
      "description": "string",
      "extension": "string",
      "images": "json",
      "meta": "json",
      "navigation": "json",
      "path": "string",
      "seo": "json",
      "stem": "string"
    }
  },
  "info": {
    "type": "data",
    "fields": {}
  }
}