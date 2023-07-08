'use server'
import { NextApiRequest, NextApiResponse } from 'next';

export async function getProjects() {
  const username = 'rm-ritik';
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  const repositories = await response.json();

  return repositories;
}